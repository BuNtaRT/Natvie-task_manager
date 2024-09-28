import React, { useEffect } from 'react';
import { FlatList, NativeEventEmitter, Text, View } from 'react-native';
import { ProcessRow } from './ProcessRow.tsx';
import { ProcessType } from '../../modules/NativeProcessModule.ts';
import { NativeModules } from 'react-native-windows';
import { useAtom } from 'jotai';
import { processesAtom } from '../../atoms/processes.ts';
import { colors } from '../../styles/palette.ts';
import TableHeader from './TableHeader.tsx';

const eventEmitter = new NativeEventEmitter(NativeModules.NativeEventEmitter);

const ProcessTable = () => {
  const [processes, setProcesses] = useAtom(processesAtom);

  // useEffect(() => {
  //   const subscription = eventEmitter.addListener('onUpdated', (process: ProcessType[]) => {
  //     console.log('event ', process[0], process.length);
  //     setProcesses(process);
  //   });
  //
  //   return () => subscription?.remove();
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        backgroundColor: colors.innerColor,
        width: '100%',
      }}>
      <FlatList
        style={{ flex: 1, alignSelf: 'stretch' }}
        data={processes}
        ListHeaderComponent={TableHeader}
        renderItem={ProcessRow}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProcessTable;
