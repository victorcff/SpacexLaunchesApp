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
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});