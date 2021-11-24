import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    backgroundColor: COLORS.BLACK,
    width: '95%',
    height: '95%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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