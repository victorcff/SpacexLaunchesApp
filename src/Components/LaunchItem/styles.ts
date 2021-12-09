import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    color: COLORS.YELLOW,
  },
  logo: {
    position: 'absolute',
    marginLeft: 30,
    height: 60,
    width: 60,
  },
  rectangleBorder: {
    width: '50%',
    height: 62,
    position: 'absolute',
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
    height: 45,
    width: '89%',
  },
  launchName: {
    fontFamily: 'Roboto_700Bold',
    color: COLORS.WHITE,
    fontSize: 18,
  },
});