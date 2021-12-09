import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useAppDispatch } from '../../../hooks';
import { MainStackParamList } from '../../../routes';
import { articleLink, imageLink, videoID, whichLaunch } from '../../Features/LaunchPicker/launchPickerSlice';
import { api } from '../../Services/api';
import { ILaunches } from '../../Types/types';
import { LaunchItem } from '../LaunchItem';
import { SearchBar } from '../SearchBar';
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
      <SearchBar 
        search={search}
        setSearch={setSearch}
        clearSearch={clearSearch}
        placeholder='Pesquise por lançamentos'
      />
      <FlatList 
        data={filteredLaunches}
        keyExtractor={item => item.id}
        initialNumToRender={16}
        removeClippedSubviews
        maxToRenderPerBatch={16}
        getItemLayout={(data, index) => {
          return {length: 110, offset: 110 * index, index}
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
                dispatch(whichLaunch(item.name))
                dispatch(articleLink(item.links.article))
                dispatch(videoID(item.links.youtube_id))
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