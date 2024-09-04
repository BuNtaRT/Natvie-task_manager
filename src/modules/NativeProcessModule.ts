import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  // getProcess: (query: string) => ProcessType[];
  getConstants(): {};
  // get: (query: string, callback: (res: string) => void) => void;
  get: (query: string) => Promise<string>;
}

export type ProcessType = {
  name: string;
  cpuLoad: number;
  memoryLoad: number;
};

export default TurboModuleRegistry.get<Spec>('Process') as Spec | null;
