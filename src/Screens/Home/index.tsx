import React, { useEffect } from 'react';
import { StatusBar, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../routes'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LaunchList } from '../../Components/LaunchList';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { COLORS } from '../../Themes/colors';
import { HomeHeader } from '../../Components/HomeHeader';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

export function Home({ navigation }: Props){
  const login = useAppSelector(state => state.auth.signedIn)

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
          <HomeHeader />
        </KeyboardAvoidingView>
        <LaunchList />
      </ImageBackground>    
    </SafeAreaView>
  );
}