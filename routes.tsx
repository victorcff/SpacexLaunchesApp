import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/Screens/Login'
import { Home } from './src/Screens/Home';
import { View } from 'react-native';

export type MainStackParamList = {
  Home: undefined,
  Login: undefined,
}

type RoutesProps = {
  isLoggedIn: boolean,
}

const mainStack = createNativeStackNavigator<MainStackParamList>();

export function Routes({isLoggedIn}: RoutesProps ){
  return (
    <mainStack.Navigator>
      {
        isLoggedIn ?
          (<mainStack.Screen 
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />)
        :
          (<mainStack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />)
      }
    </mainStack.Navigator>
  );
}

