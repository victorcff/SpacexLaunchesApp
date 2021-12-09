import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
  },
  firstLineTitle: {
    flexDirection: 'row',
    width: '100%',
  },
  title1: {
    fontFamily: 'Roboto_700Bold',
    color: COLORS.WHITE,
    fontSize: 36,
    marginBottom: 15,
  },
  title2: {
    fontFamily: 'Roboto_400Regular',
    color: COLORS.WHITE,
    fontSize: 24,
    marginTop: 5,
  },
  titleIcon: {
    flexDirection: 'row',
  },
  title3: {
    fontFamily: 'Roboto_400Regular',
    color: COLORS.WHITE,
    fontSize: 24,
    marginVertical: 3,
  },
  icon: {
    marginLeft: 20,
    marginTop: 5,
    color: COLORS.RED,
  }
});