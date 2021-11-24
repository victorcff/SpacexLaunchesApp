import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from './styles';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../Themes/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps

export function LoginButton({
  ...rest
}: Props){
  return (
    <LinearGradient 
      colors={[COLORS.LIGHTYELLOW, COLORS.RED, COLORS.DARKRED]} 
      style={styles.gradientBorder}
      start={{x: 0.25, y: 0.2}}
      end={{x: 0.9, y: 0.9}}
    >
      <TouchableOpacity
        style={styles.button}
        {...rest}
      >
        <MaterialCommunityIcons name='rocket-launch' size={30} style={styles.icon} />
        <Text style={styles.title}>
          Login
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}