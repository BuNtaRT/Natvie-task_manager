import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from './Table.styles.ts';
import { StyleSheet } from 'react-native-windows';

const TableHeader = () => {
  const { view, headerCell, text } = headerStyles;

  return (
    <View style={view}>
      <View style={StyleSheet.flatten([headerCell, { flex: 1, borderRightWidth: 1 }])}>
        <Text style={text}>#</Text>
      </View>
      <View style={StyleSheet.flatten([headerCell, { flex: 1, borderRightWidth: 1 }])}>
        <Text style={text}>Имя</Text>
      </View>
      <View style={StyleSheet.flatten([headerCell, { flex: 1 }])}>
        <Text style={text}>ОЗУ</Text>
      </View>
    </View>
  );
};

export default TableHeader;
