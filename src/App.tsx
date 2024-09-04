import React, { useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { PlatformColor, SafeAreaView } from 'react-native-windows';
import { Theme } from './styles/palette.ts';
import Search from './components/Search/Search.tsx';
import ProcessView from './Process/ProcessView.tsx';
import Process from './modules/NativeProcessModule.ts';

function App(): React.JSX.Element {
  Theme.isDarkTheme = useColorScheme() === 'dark';

  const onClick = async () => {
    console.log(Process);
    Process?.get('').then((res) => {
      console.log('res ', res);
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View
          style={{
            backgroundColor: PlatformColor('SystemControlAcrylicWindowBrush'),
          }}>
          <Search />
          <ProcessView />

          <Button title='get' onPress={onClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
    marginTop: 200,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
