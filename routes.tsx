import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/Screens/Login'
import { Home } from './src/Screens/Home';

type RootStackParamList = {
  Home: undefined,
  Login: undefined, 
};

const mainStack = createNativeStackNavigator<RootStackParamList>();

export function Routes(){
  return (
    <mainStack.Navigator initialRouteName='Login'>
      <mainStack.Screen 
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </mainStack.Navigator>
  );
}