import React from 'react';
import { 
  TouchableOpacity, 
  TouchableOpacityProps,
} from 'react-native'
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../Themes/colors';

type touchableOpacityProps = TouchableOpacityProps & {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

export function LogoutButton({
  icon,
  ...rest
}: touchableOpacityProps){
  return (
    <LinearGradient 
      colors={[COLORS.DARKRED, COLORS.YELLOW, COLORS.LIGHTYELLOW]} 
      style={styles.gradientBorder}
      start={{x: 0.3, y: 0.3}}
      end={{x: 0.9, y: 0.9}}
    >
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          style={styles.icon}
          size={28}
          name={icon}
          {...rest}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}