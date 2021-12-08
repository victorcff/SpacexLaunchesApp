import { StyleSheet } from 'react-native';
import { COLORS } from '../../Themes/colors';

export const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    height: 30,
    backgroundColor: COLORS.LIGHTGRAY,
    borderRadius: 25,
    marginVertical: 10,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  searchIcon:{
    marginTop: 4,
    color: COLORS.GRAY,
  },
  input: {
    marginRight: 50,
    fontSize: 16,
  },
  clearIcon: {
    marginTop: 4,
    marginRight: 8,
  },
});