import { AntDesign, Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { 
  View,
  Text, 
  Image, 
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { useAppSelector } from '../../../hooks';
import { MainStackParamList } from '../../../routes';
import { BackButton } from '../../Components/BackButton';
import { COLORS } from '../../Themes/colors';
import { styles } from './styles';

type Props = NativeStackScreenProps<MainStackParamList, 'LaunchDetails'>;

export function LaunchDetails({ navigation }: Props){
  const launchImage = useAppSelector(state => state.launchPicker.launchImage)
  const launchName = useAppSelector(state => state.launchPicker.launchName)

  return (
    <ImageBackground
      source={require('../../Assets/DetailsBackground.jpg')}
      style={styles.container}
    >
      <View style={styles.info}>
        <Image 
          source={{ uri: launchImage }}
          style={styles.missionImg}
        >
          </Image>
        <Text style={styles.missionName}>
          {launchName}
        </Text>
        <LinearGradient
          style={styles.separator}
          colors={[COLORS.LIGHTYELLOW, COLORS.RED, COLORS.DARKRED]}
          start={{x: 0.3, y: 0.3}}
          end={{x: 0.9, y: 0.9}}
        >
        </LinearGradient>
        <View style={styles.missionInfo}>
          <View style={styles.linksInfo}>
            <TouchableOpacity
              // onPress={goToYoutube}
            >
              <AntDesign 
                name='youtube'
                size={50}
                style={styles.videoIcon}
              />
            </TouchableOpacity>
            <Text style={styles.textInfo}>Vídeo</Text>
          </View>
          <View style={styles.linksInfo}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LaunchArticle')}
            >
              <Ionicons 
                name='document-text'
                size={50}
                style={styles.articleIcon}
              />
            </TouchableOpacity>
            <Text style={styles.textInfo}>Artigo</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <BackButton
          icon='back'
          title='Voltar'
          onPress={() => navigation.navigate('Home')} 
        />
      </View>
    </ImageBackground>
  );
}