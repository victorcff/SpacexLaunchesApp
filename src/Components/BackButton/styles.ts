import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    backgroundColor: COLORS.YELLOW,
    alignSelf: 'flex-end',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontFamily: 'Roboto_700Bold',
  },
  icon: {
    color: COLORS.WHITE,
    marginRight: 15,
  },
});