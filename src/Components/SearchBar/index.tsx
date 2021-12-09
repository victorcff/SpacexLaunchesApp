import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';

type searchBarProps = TextInputProps & {
  search: string,
  setSearch: (val: string) => void,
  clearSearch: () => void,
  placeholder: string,
}

export function SearchBar({
  search,
  setSearch,
  clearSearch,
  placeholder,
}: searchBarProps){
  return (
    <View style={styles.searchBar}>
        <FontAwesome5 
          name='search' 
          size={22} 
          style={styles.searchIcon} 
        />
        <TextInput 
          style={styles.input}
          onChangeText={query => setSearch(query)}
          value={search}
          placeholder={placeholder}
        />
        <TouchableOpacity onPress={clearSearch}>
          <MaterialIcons 
            name='clear' 
            size={22} 
            style={styles.clearIcon} 
          />
        </TouchableOpacity>
      </View>
  );
}