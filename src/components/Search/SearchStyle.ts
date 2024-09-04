import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.appBackground,
    height: 'auto',
    maxWidth: 400,
    borderRadius: sizes.radiusSm,
  },
  input: {
    backgroundColor: colors.innerColor,
    borderColor: colors.borders,
    borderWidth: 1,
    borderRadius: sizes.radiusSm,
    height: 30,
    padding: 5,
    paddingLeft: 20,
  },
});
