import { FontAwesome5 } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import React from 'react';
import { View, Text } from 'react-native'
import { useAppDispatch } from '../../../hooks';
import { loggedOut } from '../../Features/auth/authSlice';
import { auth } from '../../firebase';
import { LogoutButton } from '../LogoutButton';
import { styles } from './styles';

export function HomeHeader(){
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    signOut(auth)
    dispatch(loggedOut())
  }

  
  return (
    <View style={styles.title}>
      <View style={styles.firstLineTitle}>
        <Text style={styles.title1}>
          EXPLORE
        </Text>
        <LogoutButton 
          icon='logout'
          onPress={handleLogout}
        />
      </View>
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
  );
}