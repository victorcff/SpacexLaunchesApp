import React from 'react';
import { Text, Pressable, PressableProps, ActivityIndicator } from 'react-native'
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../Themes/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'


type pressableProps = PressableProps & {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  title: string;
  isLoading: boolean;
}

export function LoginButton({
  icon,
  title,
  isLoading,
  ...rest
}: pressableProps){
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
            <MaterialCommunityIcons name={icon} size={30} style={styles.icon} />
            <Text style={styles.title}>
              {title}
            </Text>
          </>
        }
      </Pressable>
    </LinearGradient>
  );
}