import { TurboModuleRegistry } from 'react-native';
import type { TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  // getProcess: (query: string) => ProcessType[];
  getConstants(): {};
  // get: (query: string, callback: (res: string) => void) => void;
  get: (query: string) => Promise<string>;
  start: () => void;
  stop: () => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Process');

export type ProcessType = {
  name: string;
  cpuLoad: number;
  memoryLoad: number;
};
