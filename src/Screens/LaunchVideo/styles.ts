import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  missionImg: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 30,
  },
});