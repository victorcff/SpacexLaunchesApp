import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { styles } from './styles';
import { COLORS } from '../../Themes/colors';

export function InputBottomBorder(){
  return (
    <LinearGradient 
      colors={[COLORS.LIGHTYELLOW, COLORS.RED, COLORS.DARKRED]} 
      style={styles.gradientBorder}
      start={{x: 0.3, y: 0.3}}
      end={{x: 0.9, y: 0.9}}
    > 
    </LinearGradient>
  );
}