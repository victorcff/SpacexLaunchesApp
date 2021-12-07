import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from './styles';

type touchableOpacityProps = TouchableOpacityProps & {
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  title: string;
}

export function BackButton({
  icon,
  title,
  ...rest
}: touchableOpacityProps){
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign 
        name={icon} 
        size={25} 
        style={styles.icon}
        {...rest} 
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}