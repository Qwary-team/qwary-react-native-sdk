import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { configure, addEvent } from 'react-native-qwary-v2';

export default function App() {
  React.useEffect(() => {
    configure('QWARY_API_KEY');
    addEventCall();
  }, []);

  const addEventCall = () => {
    addEvent('EVENT_NAME');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Result</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
