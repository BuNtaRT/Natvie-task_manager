import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-windows';
import Search from './components/Search/Search.tsx';
import Process from './modules/NativeProcessModule.ts';
import { styles } from './App.styles.ts';
import ProcessTable from './components/ProcessTable/ProcessTable.tsx';

const App = () => {
  const { safeArea, appView, buttonView } = styles;

  useEffect(() => {
    // Process.start();

    return () => {
      Process.stop();
    };
  }, []);

  return (
    <SafeAreaView style={safeArea}>
      <View style={appView}>
        <Search />

        <ProcessTable />
        {/*<ScrollView contentInsetAdjustmentBehavior='automatic'>*/}
        {/*<View style={buttonView}>*/}
        {/*  <ProcessView />*/}

        {/*  /!*<Button title='get' onPress={onClick} />*!/*/}
        {/*</View>*/}
        {/*</ScrollView>*/}
      </View>
    </SafeAreaView>
  );
};

export default App;
