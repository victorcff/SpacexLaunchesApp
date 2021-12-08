import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native'
import { useAppDispatch } from '../../../hooks';
import { MainStackParamList } from '../../../routes';
import { articleLink, imageLink, videoLink, whichLaunch } from '../../Features/LaunchPicker/launchPickerSlice';
import { api } from '../../Services/api';
import { COLORS } from '../../Themes/colors';
import { ILaunches } from '../../Types/types';
import { LaunchItem } from '../LaunchItem';
import { styles } from './styles';

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'LaunchDetails'
>;

export function LaunchList(){
  const dispatch = useAppDispatch()

  const clearSearch = () => {
    setSearch('')
  }

  const navigation = useNavigation<DetailsScreenNavigationProp>()

  const [ launches, setLaunches ] = useState<any[]>()
  const [ search, setSearch ] = useState('')

  async function getLaunches() {
    const response = await api.get('/launches')
    setLaunches(response.data)
  }

  useEffect(() => {
    getLaunches()
  }, [])

  const filteredLaunches = launches?.filter(({name}: ILaunches) => {
    return name.toString().toLowerCase().includes(search.toLowerCase())
  })

  return (
    <View
      style={styles.container}
    >
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
          placeholder='Pesquise por lançamentos'
        />
        <TouchableOpacity onPress={clearSearch}>
          <MaterialIcons 
            name='clear' 
            size={22} 
            style={styles.clearIcon} 
          />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={filteredLaunches}
        keyExtractor={item => item.id}
        initialNumToRender={16}
        removeClippedSubviews
        maxToRenderPerBatch={16}
        ItemSeparatorComponent={() => { 
          return(
            <LinearGradient
              style={styles.separator}
              colors={[COLORS.LIGHTYELLOW, COLORS.RED, COLORS.DARKRED]}
              start={{x: 0.3, y: 0.3}}
              end={{x: 0.9, y: 0.9}}
            >
            </LinearGradient>
          )
         }}
        getItemLayout={(data, index) => {
          return {length: 110, offset: 110 * index, index}
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
                dispatch(whichLaunch(item.name))
                dispatch(articleLink(item.links.article))
                dispatch(videoLink(item.links.webcast))
                dispatch(imageLink(item.links.patch.small))
                navigation.navigate('LaunchDetails')
              }
            }
          >
            <LaunchItem title={item.name} img={item.links.patch.small} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}