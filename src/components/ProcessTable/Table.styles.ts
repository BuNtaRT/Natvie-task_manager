import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../styles/palette.ts';

export const cellStyles = StyleSheet.create({
  view: {
    backgroundColor: colors.innerElementBackground,
    borderColor: colors.bordersSecond,
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderTopWidth: 1,
    padding: sizes.paddingSm,
    paddingHorizontal: sizes.paddingMd,
  },

  text: {
    fontSize: 16,
  },
});

export const headerStyles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.innerColor,
    minWidth: 300,
    width: '100%',
    gap: sizes.gap,
    paddingBottom: sizes.paddingMd,
  },
  headerCell: {
    backgroundColor: colors.innerColor,
    borderColor: colors.bordersSecond,
    borderStyle: 'solid',
    borderTopWidth: 1,
    padding: sizes.paddingSm,
    paddingHorizontal: sizes.paddingMd,
    borderTopLeftRadius: sizes.radiusXs,
    borderTopRightRadius: sizes.radiusXs,
  },
  text: {
    fontSize: 16,
  },
});
