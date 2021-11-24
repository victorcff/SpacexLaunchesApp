import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../Themes/colors';

type Props = TouchableOpacityProps

export function RegisterButton({
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
        <Text style={styles.title}>
          Registrar
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}