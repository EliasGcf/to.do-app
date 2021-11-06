import { createStitches } from 'stitches-native';

export const {
  styled,
  config: { theme },
} = createStitches({
  theme: {
    colors: {
      primary: '#8257E5',
      green: '#1DB863',
      black: '#525252',
      gray: '#666666',
      gray2: '#B2B2B2',
      white: '#FFFFFF',
    },
    fonts: {
      regular: 'Inter_400Regular',
      mediu: 'Inter_500Medium',
    },
  },
});
