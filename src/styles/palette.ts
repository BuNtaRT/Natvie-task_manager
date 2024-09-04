import { PlatformColor } from 'react-native-windows';

export let Theme = {
  isDarkTheme: true,
};

export const colors = {
  borders: '#282828',
  innerColor: PlatformColor('SystemControlAcrylicElementBrush'),
  appBackground: Theme.isDarkTheme ? '#282828' : '#c6c6c6',
};

export const sizes = {
  radiusSm: 8,
  radiusMd: 16,

  paddingSm: 4,
  paddingMd: 8,
  paddingLg: 16,
};
