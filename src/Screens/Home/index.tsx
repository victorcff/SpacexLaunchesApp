import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles';
import { fetchLaunches } from '../../Middlewares/GetLaunches';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../routes'

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

export function Home({ navigation, route }: Props){
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={fetchLaunches}
      >
        <Text style={styles.text}>
          Fetch Launches
        </Text>
      </TouchableOpacity>
    </View>
  );
}