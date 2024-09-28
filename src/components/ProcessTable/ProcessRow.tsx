import React from 'react';
import { View } from 'react-native';
import { ProcessType } from '../../modules/NativeProcessModule.ts';
import { ProcessCell } from './ProcessCell.tsx';
import { sizes } from '../../styles/palette.ts';

export const ProcessRow = ({ item }: PropsType) => {
  const { id, name, cpuLoad, memoryLoad } = item;
  console.log(name);
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        gap: sizes.gap,
        minWidth: 300,
        width: '100%',
        borderTopLeftRadius: sizes.radiusSm,
        borderTopRightRadius: sizes.radiusSm,
        borderBottomLeftRadius: sizes.radiusSm,
        borderBottomRightRadius: sizes.radiusSm,
      }}>
      <ProcessCell flex={1} content={id} />
      <ProcessCell flex={1} content={name} />
      <ProcessCell flex={1} content={memoryLoad ?? ''} />
    </View>
  );
};

type PropsType = {
  item: ProcessType;
};
