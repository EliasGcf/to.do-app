import React from 'react';
import { theme } from 'stitches.config';
import { scale } from 'react-native-size-matters';
import { StyleProp, ViewStyle, TextInputProps } from 'react-native';

import ChevronRightSVG from '@assets/svg/chevron-right.svg';

import { Container, IconContainer, TextInput } from './styles';

type InputProps = TextInputProps & {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
};

export function Input({ style, onSubmit, ...rest }: InputProps) {
  return (
    <Container style={style}>
      <TextInput
        onSubmitEditing={onSubmit}
        placeholderTextColor={theme.colors.gray2}
        {...rest}
      />

      <IconContainer onPress={onSubmit} activeOpacity={0.7}>
        <ChevronRightSVG width={scale(32)} height={scale(32)} />
      </IconContainer>
    </Container>
  );
}
