import { StyleSheet } from 'react-native';
import { PlatformColor } from 'react-native-windows';

export const styles = StyleSheet.create({
  safeArea: {
    // backgroundColor: PlatformColor('SystemControlAcrylicWindowBrush'),
    // marginTop: 200,
    // minHeight: 500,
    flex: 1,
  },
  appView: {
    // backgroundColor: PlatformColor('SystemControlAcrylicWindowBrush'),
    flex: 5,
    alignItems: 'center',
  },
  buttonView: {
    minHeight: 40,
  },
});
