import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    color: COLORS.YELLOW,
  },
  logo: {
    position: 'absolute',
    marginLeft: 26,
    height: 50,
    width: 50,
  },
  rectangleBorder: {
    width: '50%',
    height: 50,
    position: 'absolute',
    marginLeft: 86,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
    height: 40,
    width: '95%',
  },
  launchName: {
    fontFamily: 'Roboto_700Bold',
    color: COLORS.WHITE,
    fontSize: 18,
  },
});