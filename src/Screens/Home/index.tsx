import React, { useEffect, useState } from 'react';
import { StatusBar, View, Text, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../routes'
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { loggedOut } from '../../Features/auth/authSlice';
import { auth } from '../../firebase';
import { LogoutButton } from '../../Components/LogoutButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { LaunchList } from '../../Components/LaunchList';
import { SearchBar } from '../../Components/SearchBar';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { COLORS } from '../../Themes/colors';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

export function Home({ navigation }: Props){
  const login = useAppSelector(state => state.auth.signedIn)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    signOut(auth)
    dispatch(loggedOut())
  }

  useEffect(() => {
    if(!login){
      navigation.navigate('Login')
    }
  }, [login])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={COLORS.BLACK}
      />
      <ImageBackground
        source={require('../../Assets/DetailsBackground.jpg')}
        style={styles.bgImg}
      >
        <KeyboardAvoidingView style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.title1}>
              EXPLORE
            </Text>
            <Text style={styles.title2}>
              OS LANÇAMENTOS
            </Text>
            <View style={styles.titleIcon}>
              <Text style={styles.title3}>
                DA SPACEX
              </Text>
              <FontAwesome5 name='rocket' size={33} style={styles.icon} />
            </View>
          </View>
          <LogoutButton
            icon='logout'
            onPress={handleLogout}
          />
        </KeyboardAvoidingView>
        <SearchBar />
        <LaunchList />
      </ImageBackground>    
    </SafeAreaView>
  );
}