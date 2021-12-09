import React from 'react';
import { Image, View } from 'react-native'
import { styles } from './styles';
import YoutubePlayer from 'react-native-youtube-iframe'
import { useAppSelector } from '../../../hooks';

export function LaunchVideo(){
  const launchImage = useAppSelector(state => state.launchPicker.launchImage)
  const youtubeId = useAppSelector(state => state.launchPicker.launchVideo)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: launchImage }}
        style={styles.missionImg}
      >
      </Image>
      <YoutubePlayer 
        height={300}
        videoId={youtubeId}
      />
    </View>
  );
}