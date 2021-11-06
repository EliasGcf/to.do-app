import { Row } from '@components/utils/Row';
import { styled } from 'stitches.config';

export const Container = styled(Row, {
  height: 56,
  backgroundColor: '$white',
  borderRadius: 5,
  paddingLeft: 20,
  borderWidth: 1,
  borderColor: '#EBEBEB',
});

export const TextInput = styled('TextInput', {
  flex: 1,
  fontSize: 14,
  color: '$gray',
  marginRight: 16,
  fontFamily: '$regular',
});

export const IconContainer = styled('TouchableOpacity', {
  padding: 12,
  borderLeftWidth: 1,
  borderColor: '#EBEBEB',
});
