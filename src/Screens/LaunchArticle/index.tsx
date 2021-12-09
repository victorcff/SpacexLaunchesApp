import React from 'react';
import { styles } from './styles';
import { WebView } from 'react-native-webview'
import { useAppSelector } from '../../../hooks';

export function LaunchArticle(){
  const article = useAppSelector(state => state.launchPicker.launchArticle)

  return (
    <WebView
      style={styles.container}
      source={{ uri: article }}
    />
  );
}