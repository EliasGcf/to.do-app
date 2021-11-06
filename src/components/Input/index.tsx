import React from 'react';
import { theme } from 'stitches.config';
import { StyleProp, ViewStyle } from 'react-native';

import ChevronRightSVG from '@assets/svg/chevron-right.svg';

import { Container, IconContainer, TextInput } from './styles';

type InputProps = {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};

export function Input({ style, placeholder }: InputProps) {
  return (
    <Container style={style}>
      <TextInput placeholder={placeholder} placeholderTextColor={theme.colors.gray2} />

      <IconContainer activeOpacity={0.7}>
        <ChevronRightSVG />
      </IconContainer>
    </Container>
  );
}
