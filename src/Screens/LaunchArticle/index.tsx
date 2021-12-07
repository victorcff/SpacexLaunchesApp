import React from 'react';
import { styles } from './styles';
import { WebView } from 'react-native-webview'
import { useAppSelector } from '../../../hooks';
import { StatusBar } from 'react-native';
import { COLORS } from '../../Themes/colors';

export function LaunchArticle(){
  const article = useAppSelector(state => state.launchPicker.launchArticle)

  return (
    <WebView
      style={styles.container}
      source={{ uri: article }}
    />
  );
}