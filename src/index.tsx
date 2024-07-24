import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-qwary-v2' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const QwaryV2 = NativeModules.QwaryV2
  ? NativeModules.QwaryV2
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function configure(qwSettings: string) {
  QwaryV2.configure(qwSettings);
}

export function addEvent(eventName: string) {
  QwaryV2.addEvent(eventName);
}

export function logout() {
  QwaryV2.logout();
}

export function dismissActiveSurvey() {
  QwaryV2.dismissActiveSurvey();
}

export function presentSurvey(isBanner: boolean) {
  QwaryV2.presentSurvey(isBanner);
}
