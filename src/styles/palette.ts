import { PlatformColor } from 'react-native-windows';
import { Appearance } from 'react-native';

export const isDarkTheme = Appearance.getColorScheme() === 'dark';

export const colors = {
  bordersMain: '#282828',
  bordersSecond: '#676767',
  innerColor: PlatformColor('SystemControlAcrylicElementBrush'),
  innerElementBackground: PlatformColor('SystemControlBackgroundTransparentRevealBorderBrush'),
  appBackground: isDarkTheme ? '#282828' : '#c6c6c6',
  fontPrimaryActive: isDarkTheme ? '#dfdfdf' : '#303030',
  fontPrimaryDisabled: isDarkTheme ? '#b3b3b3' : '#606060',
  fontPrimaryHover: isDarkTheme ? '#ededed' : '#1e1e1e',
};

export const sizes = {
  gap: 6,

  radiusXs: 3,
  radiusSm: 6,
  radiusMd: 12,

  paddingSm: 4,
  paddingMd: 8,
  paddingLg: 16,
};
