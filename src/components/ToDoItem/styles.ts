import { TextInput } from 'react-native';
import { scale } from 'react-native-size-matters';
import { styled } from 'stitches.config';

export const Container = styled('View', {
  height: scale(48),
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 24,
  paddingRight: 20,

  justifyContent: 'space-between',

  borderBottomWidth: scale(1),
  borderBottomColor: 'transparent',

  variants: {
    editing: {
      true: {
        borderBottomColor: '$primary',
      },
    },
  },
});

export const Main = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
});

export const ToDoTextInput = styled(TextInput, {
  fontSize: scale(14),
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
  height: scale(24),
  width: scale(1),
  backgroundColor: '#c4c4c4',
  marginHorizontal: 12,
});

export const ActionsButton = styled('View', {
  flexDirection: 'row',
});
