import { Text, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native-windows';
import { cellStyles } from './Table.styles.ts';

export const ProcessCell = (props: PropsType) => {
  const { content, flex, style } = props;
  const { view, text } = cellStyles;

  const viewFinal = StyleSheet.flatten([view, { flex }, style]);

  return (
    <View style={viewFinal}>
      <Text style={text}>{content}</Text>
    </View>
  );
};

type PropsType = {
  content: string | number;
  flex: number;
  style?: Object;
};
