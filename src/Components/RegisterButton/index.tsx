import React from 'react';
import { Text, Pressable, PressableProps, ActivityIndicator } from 'react-native'
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../Themes/colors';

type Props = PressableProps & {
  title: string,
  isLoading: boolean,
}

export function RegisterButton({
  title,
  isLoading,
  ...rest
}: Props){
  return (
    <LinearGradient 
      colors={[COLORS.LIGHTYELLOW, COLORS.RED, COLORS.DARKRED]} 
      style={styles.gradientBorder}
      start={{x: 0.25, y: 0.2}}
      end={{x: 0.9, y: 0.9}}
    >
      <Pressable
        style={styles.button}
        {...rest}
      >
        {
          isLoading ? <ActivityIndicator color={COLORS.WHITE} /> :
          <>
            <Text style={styles.title}>
              {title}
            </Text>
          </>
        }
      </Pressable>
    </LinearGradient>
  );
}