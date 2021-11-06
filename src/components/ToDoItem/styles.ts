import { TextInput } from 'react-native';
import { styled } from 'stitches.config';

export const Container = styled('View', {
  height: 48,
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 24,
  paddingRight: 20,

  justifyContent: 'space-between',
});

export const ToDoTextInput = styled(TextInput, {
  fontSize: 14,
  color: '$gray',
  marginLeft: 16,
  fontFamily: '$mediu',

  variants: {
    checked: {
      true: {
        color: '$green',
        textDecorationLine: 'line-through',
      },
    },
  },
});

export const ActionsButtonDivider = styled('View', {
  height: 24,
  width: 1,
  backgroundColor: '#c4c4c4',
  marginHorizontal: 12,
});

export const ActionsButton = styled('View', {
  flexDirection: 'row',
});
