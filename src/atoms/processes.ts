import { atom } from 'jotai';
import { ProcessType } from '../modules/NativeProcessModule.ts';

export const processesAtom = atom<ProcessType[]>([
  {
    AppType: 'Win32',
    diskOperation: 4691519,
    id: 4,
    memoryLoad: 3432448,
    memoryLoadPeak: 277987328,
    memorySwap: 65536,
    memorySwapPeak: 598016,
    name: 'System',
    time: '00:00:00',
  },
]);
