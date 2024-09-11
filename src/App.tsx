import React, { useEffect } from 'react';
import {
  Button,
  NativeEventEmitter,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { NativeModules, PlatformColor, SafeAreaView } from 'react-native-windows';
import { Theme } from './styles/palette.ts';
import Search from './components/Search/Search.tsx';
import ProcessView from './Process/ProcessView.tsx';
import Process from './modules/NativeProcessModule.ts';

const eventEmitter = new NativeEventEmitter(NativeModules.NativeEventEmitter);

function App(): React.JSX.Element {
  Theme.isDarkTheme = useColorScheme() === 'dark';

  useEffect(() => {
    // Подписка на событие.
    const subscription = eventEmitter.addListener('onUpdated', (number: number) => {
      console.log('event ', number);
    });

    // Отписка от события при размонтировании компонента.
    return () => subscription?.remove();
  }, []);

  const onClick = async () => {
    Process?.start();

    // Process?.get('').then((res) => {
    //   console.log('res ', res);
    // });
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
