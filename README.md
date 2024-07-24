# react-native-qwary-v2

The Qwary SDK allows you to seamlessly integrate surveys and feedback forms.

## Installation

npm install react-native-qwary-v2
yarn add react-native-qwary-v2

## Usage

 import * as React from 'react';
 import { configure,addEvent } from 'react-native-qwary-v2';

  React.useEffect(() => {
    configure('QWARY_API_KEY');
    addEventCall();
  }, []);

  const addEventCall = () => {
    addEvent('EVENT_NAME');
  };

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT