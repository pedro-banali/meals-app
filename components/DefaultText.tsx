import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

export const DefaultText: FC = ({ children }) => {
  return <Text style={styles.content}>{children}</Text>;
};

const styles = StyleSheet.create({
  content: {
    fontFamily: 'open-sans'
  }
});
