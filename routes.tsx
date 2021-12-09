import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/Screens/Login'
import { Home } from './src/Screens/Home';
import { LaunchDetails } from './src/Screens/LaunchDetails';
import { LaunchArticle } from './src/Screens/LaunchArticle';
import { LaunchVideo } from './src/Screens/LaunchVideo';

export type MainStackParamList = {
  Home: undefined,
  Login: undefined,
  LaunchDetails: undefined,
  LaunchArticle: undefined,
  LaunchVideo: undefined,
}


const mainStack = createNativeStackNavigator<MainStackParamList>();

export function Routes(){
  return (
    <mainStack.Navigator initialRouteName='Login'>
      <mainStack.Screen 
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <mainStack.Screen 
        name='LaunchDetails'
        component={LaunchDetails}
        options={{ headerShown: false }}
      />
      <mainStack.Screen 
        name='LaunchArticle'
        component={LaunchArticle}
        options={{ headerShown: false }}
      />
      <mainStack.Screen 
        name='LaunchVideo'
        component={LaunchVideo}
        options={{ headerShown: false }}
      />
    </mainStack.Navigator>
  );
}

