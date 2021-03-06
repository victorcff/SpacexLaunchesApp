import React, { useEffect, useState } from 'react';
import { 
  ImageBackground, 
  KeyboardAvoidingView,
  TextInput 
} from 'react-native'
import { styles } from './styles';
import { LoginButton } from '../../Components/LoginButton';
import { RegisterButton } from '../../Components/RegisterButton';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { loggedIn, loggedOut } from '../../Features/auth/authSlice'
import { loadingLoginNow, notLoadingLogin } from '../../Features/Loading/loadingLoginSlice'
import { loadingRegisterNow, notLoadingRegister } from '../../Features/Loading/loadingRegisterSlice';
import { MainStackParamList } from '../../../routes'
import { loadingNow, notLoading } from '../../Features/Loading/loadingSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { InputBottomBorder } from '../../Components/InputBottomBorder';

type Props = NativeStackScreenProps<MainStackParamList, 'Login'>;

export function Login({ navigation }: Props){
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const loadingLogin = useAppSelector(state => state.loadingLogin.isLoadingLogin)
  const loadingRegister = useAppSelector(state => state.loadingRegister.isLoadingRegister)
  const loading = useAppSelector(state => state.loading.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(loggedIn())
        dispatch(notLoadingLogin())
        dispatch(notLoadingRegister())
        dispatch(notLoading())
        navigation.navigate('Home')
      } else {
        dispatch(loggedOut())
      }
    })
    return unsubscribe;
  }, [])

  const handleLogin = () => {
    dispatch(loadingNow())
    dispatch(loadingLoginNow());
    signInWithEmailAndPassword(auth, email, password)
    .catch(error => {
      alert(error.message)
      if(error.message) {
        dispatch(notLoadingLogin())
        dispatch(loggedOut())
        dispatch(notLoading())
      }
    })
  }

  const handleRegister = () => {
    dispatch(loadingRegisterNow())
    createUserWithEmailAndPassword(auth,email,password)
    .catch(error => {
      alert(error.message)
      if(error.message){
        dispatch(loggedOut())
        dispatch(notLoadingRegister())
      } else {
        handleLogin()
      }
    })
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
        <InputBottomBorder />
        <TextInput
          placeholder="Senha"
          placeholderTextColor='#FFFFFF'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <InputBottomBorder />
        <LoginButton
          title='Login'
          icon='rocket-launch'
          isLoading={loadingLogin}
          onPress={handleLogin}
          disabled={loading}
        />
        <RegisterButton
          title='Registrar'
          isLoading={loadingRegister}
          onPress={handleRegister}
          disabled={loading}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
    
  );
}