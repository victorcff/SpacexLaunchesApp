import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { COLORS } from '../../Themes/colors';
import { styles } from './styles';

type Props = {
  title: string;
  img: string;
}

export function LaunchItem({
  title,
  img,
}: Props){
  return (
    // <LinearGradient 
    //   style={styles.container}
    //   colors={['transparent', COLORS.RED, COLORS.YELLOW]}
    //   start={{x: 0.4, y: 0.4}}
    //   end={{x: 0.9, y: 0.9}}
    // >
    <View style={styles.container}>
      <Feather 
        name='hexagon' 
        size={100}
        style={styles.icon}
      />
      <Image
        source={{uri: img}}
        style={styles.logo}
      >
      </Image>
      <LinearGradient 
        style={styles.rectangleBorder}
        colors={[COLORS.YELLOW, COLORS.RED, COLORS.DARKRED]}
        start={{x: 0.2, y: 0.5}}
        end={{x: 0.6, y: 0.8}}
      >
        <View style={styles.rectangle}>
          <Text style={styles.launchName}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </View>
    // </LinearGradient>
    
  );
}