import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles';
import { fetchLaunches } from '../../Middlewares/GetLaunches';

export function Home(){
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