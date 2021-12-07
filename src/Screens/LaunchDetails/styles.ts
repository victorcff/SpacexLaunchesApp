import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 80,
  },
  missionImg: {
    width: 150,
    height: 150,
  },
  missionName: {
    color: COLORS.WHITE,
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
    marginVertical: 10,
  },
  separator: {
    marginTop: 10,
    height: 2,
    width: '80%',
  },
  missionInfo: {
    marginTop: 10,
    flexDirection: 'row',
  },
  linksInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  videoIcon: {
    color: COLORS.RED,
  },
  articleIcon: {
    color: COLORS.WHITE,
  },
  textInfo: {
    color: COLORS.WHITE,
    fontSize: 18,
  },
});