import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    justifyContent: 'flex-end',
    marginVertical: 0,
    width: '80%',
    height: 48,
    paddingLeft: 8,
    borderBottomWidth: 1,
    color: COLORS.WHITE,
  },
});