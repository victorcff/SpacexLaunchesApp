import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    width: '95%',
    height: '95%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
    color: COLORS.DARKRED,
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: 'Roboto_700Bold',
    fontSize: 28
  },
  gradientBorder: {
    width: '50%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 10,
  },
});