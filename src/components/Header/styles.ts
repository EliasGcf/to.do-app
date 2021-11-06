import { styled } from 'stitches.config';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Input } from '@components/Input';

export const Container = styled('View', {
  backgroundColor: '$primary',

  paddingBottom: 60,
  paddingHorizontal: 24,
  paddingTop: getStatusBarHeight() + 24,
});

export const Info = styled('View', {
  flexDirection: 'row',
});

export const HeaderInput = styled(Input, {
  marginTop: -28,
  marginHorizontal: 24,
});
