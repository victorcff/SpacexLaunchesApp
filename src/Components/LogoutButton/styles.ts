import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  gradientBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    left: '60%',
    bottom: 30,
  },
  button: {
    borderRadius: 45,
    height: 45,
    width: 45,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
  },
  icon: {
    color: `${COLORS.WHITE}80`,
    marginLeft: 4,
  },
});