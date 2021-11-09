import { styled } from 'stitches.config';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Input } from '@components/Input';
import { scale } from 'react-native-size-matters';

export const Container = styled('View', {
  backgroundColor: '$primary',

  paddingBottom: scale(60),
  paddingHorizontal: 24,
  paddingTop: getStatusBarHeight() + 24,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Info = styled('Text', {
  flexDirection: 'row',
  fontSize: scale(15),
  lineHeight: scale(20),
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
