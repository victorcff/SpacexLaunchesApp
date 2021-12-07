import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
    paddingTop: getStatusBarHeight() + 5
  },
  bgImg: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    flexDirection: 'column',
  },
  title1: {
    fontFamily: 'Roboto_700Bold',
    color: COLORS.WHITE,
    fontSize: 36,
    marginBottom: 15,
    marginLeft: 20
  },
  title2: {
    fontFamily: 'Roboto_400Regular',
    color: COLORS.WHITE,
    fontSize: 24,
    marginTop: 5,
    marginLeft: 40,
  },
  titleIcon: {
    flexDirection: 'row',
  },
  title3: {
    fontFamily: 'Roboto_400Regular',
    color: COLORS.WHITE,
    fontSize: 24,
    marginVertical: 3,
    marginLeft: 20
  },
  icon: {
    marginLeft: 20,
    marginTop: 5,
    color: COLORS.RED,
  }
});