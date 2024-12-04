import './gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/routers';
import SplashScreen from 'react-native-splash-screen';
import {Platform, StyleSheet, useColorScheme} from 'react-native';

export default function App() {
  const theme = useColorScheme();
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  dark: {
    backgroundColor: '#000',
  },
  light: {
    backgroundColor: '#fff',
  },
});
