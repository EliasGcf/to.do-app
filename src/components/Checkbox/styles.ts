import { scale } from 'react-native-size-matters';
import { styled } from 'stitches.config';

export const Container = styled('Pressable', {
  height: scale(16),
  width: scale(16),
  borderWidth: 1.5,
  borderRadius: 4,
  borderColor: '$gray2',

  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    checked: {
      true: {
        borderWidth: 0,
        backgroundColor: '$green',
      },
    },
  },
});
