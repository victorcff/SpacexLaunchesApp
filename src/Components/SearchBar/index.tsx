import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { search } from '../../Features/Search/searchSlice'
import { styles } from './styles';

export function SearchBar(){
  const dispatch = useAppDispatch()
  const query = useAppSelector(state => state.search.query)

  const cancelSearch = () => {
    dispatch(search(''))
  }

  return (
    <View style={styles.container}>
      <FontAwesome5 
        name='search' 
        size={22} 
        style={styles.searchIcon} 
      />
      <TextInput 
        style={styles.input}
        onChangeText={text => dispatch(search(text))}
        value={query}
        placeholder='Pesquise por lançamentos'
      />
      <TouchableOpacity onPress={cancelSearch}>
        <MaterialIcons 
          name='clear' 
          size={22} 
          style={styles.clearIcon} 
        />
      </TouchableOpacity>
    </View>
  );
}