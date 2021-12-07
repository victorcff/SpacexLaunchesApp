import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.BLACK,
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },
  item: {
    width: '50%',
    height: 30,
    backgroundColor: COLORS.RED,
    fontSize: 20,
    marginVertical: 5,
  },
  separator: {
    marginVertical: 10,
    height: 2,
    width: '100%',
  },
});