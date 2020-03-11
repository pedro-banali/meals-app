import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Platform } from 'react-native';
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons';
import Colors from '../constants/Color';

export const CustomHeaderButtons: FC<HeaderButtonProps> = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primary}
    />
  );
};
