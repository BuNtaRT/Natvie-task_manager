import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../styles/palette.ts';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.innerColor,
    maxHeight: 35,
    // maxWidth: 100,
    borderRadius: sizes.radiusSm,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    color: '#aaa',
  },
  input: {
    backgroundColor: colors.innerColor,
    borderColor: colors.bordersMain,
    borderWidth: 1,
    borderRadius: sizes.radiusSm,
    height: 35,
    padding: 5,
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 2,
  },
});
