import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux'
import { store } from './src/Store/store'
import { login } from './src/Store/actions';
import { 
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold, 
  useFonts, 
} from '@expo-google-fonts/roboto';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_400Regular_Italic
  });

  if( !fontsLoaded ) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          translucent={true}
          barStyle='light-content'
        />
        <Routes 
          isLoggedIn={login}
        />
      </NavigationContainer>
    </Provider>
    
  );
}
