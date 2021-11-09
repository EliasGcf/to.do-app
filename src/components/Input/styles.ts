import { scale } from 'react-native-size-matters';
import { styled } from 'stitches.config';

import { Row } from '@components/utils/Row';

export const Container = styled(Row, {
  height: scale(56),
  backgroundColor: '$white',
  borderRadius: 5,
  paddingLeft: 20,
  borderWidth: scale(1),
  borderColor: '#EBEBEB',
});

export const TextInput = styled('TextInput', {
  flex: 1,
  fontSize: scale(14),
  color: '$gray',
  marginRight: 16,
  fontFamily: '$regular',
});

export const IconContainer = styled('TouchableOpacity', {
  padding: scale(12),
  borderLeftWidth: 1,
  borderColor: '#EBEBEB',
});
