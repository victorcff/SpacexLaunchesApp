import React, { useEffect, useState } from 'react';
import { 
  ImageBackground, 
  KeyboardAvoidingView,
  TextInput 
} from 'react-native'
import { styles } from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { LoginButton } from '../../Components/LoginButton';
import { COLORS } from '../../Themes/colors';
import { RegisterButton } from '../../Components/RegisterButton';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { loggedIn, loggedOut } from '../../Features/auth/authSlice'
import { loadingNow, notLoading } from '../../Features/Loading/loadingSlice'
import { MainStackParamList } from '../../../routes'
import { dispatch, loading } from '../../Store/actions';

type Props = NativeStackScreenProps<MainStackParamList, 'Login'>;

export function Login({ navigation, route }: Props){
  const [ email, setEmail ] = useState('')
  const [ password, setPassowrd ] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(loggedIn())
      } else {
        dispatch(loggedOut())
      }
    })

    return unsubscribe;
  }, [])

  // useEffect(() => {
  //   if(login){
  //     navigation.navigate('Home')
  //   }
  // }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .catch(error => alert(error.message))
    dispatch(loadingNow());
  }

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .catch(error => alert(error.message))
    
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        source={require('../../Assets/LoginImg.jpg')}
        style={styles.img}
      >
        <TextInput
          placeholder="Email"
          placeholderTextColor='#FFFFFF'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          keyboardType='email-address'
        />
        <LinearGradient 
          colors={[COLORS.LIGHTYELLOW, COLORS.RED, COLORS.DARKRED]} 
          style={styles.gradientBorder}
          start={{x: 0.3, y: 0.3}}
          end={{x: 0.9, y: 0.9}}
        > 
        </LinearGradient>
        <TextInput
          placeholder="Senha"
          placeholderTextColor='#FFFFFF'
          value={password}
          onChangeText={text => setPassowrd(text)}
          style={styles.input}
          secureTextEntry
        />
        <LinearGradient 
          colors={[COLORS.LIGHTYELLOW, COLORS.RED, COLORS.DARKRED]} 
          style={styles.gradientBorder}
          start={{x: 0.3, y: 0.3}}
          end={{x: 0.9, y: 0.9}}
        > 
        </LinearGradient>
        <LoginButton
          title='Login'
          icon='rocket-launch'
          isLoading={loading}
          onPress={handleLogin}
          disabled={loading}
        />
        <RegisterButton
          onPress={handleRegister}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
    
  );
}