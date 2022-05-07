import 'react-native-gesture-handler';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import Widget from './src/components/Widget';

interface Props {
  children: JSX.Element;
}

const DissmissKeyBoard = ({ children }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        style={{ flex: 1 }}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <DissmissKeyBoard>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <StatusBar style="light" backgroundColor="transparent" translucent />

        <Widget />
      </View>
    </DissmissKeyBoard>
  );
}
