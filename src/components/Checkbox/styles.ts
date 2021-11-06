import { styled } from 'stitches.config';

export const Container = styled('Pressable', {
  height: 16,
  width: 16,
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
