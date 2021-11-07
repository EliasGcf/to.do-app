import { styled } from 'stitches.config';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Input } from '@components/Input';

export const Container = styled('View', {
  backgroundColor: '$primary',

  paddingBottom: 60,
  paddingHorizontal: 24,
  paddingTop: getStatusBarHeight() + 24,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Info = styled('Text', {
  flexDirection: 'row',
  fontSize: 15,
  lineHeight: 20,
  color: '$white',
  fontFamily: '$regular',
});

export const InfoCount = styled('Text', {
  fontFamily: '$bold',
});

export const HeaderInput = styled(Input, {
  marginTop: -28,
  marginHorizontal: 24,
});
