import React from 'react';

import ChevronRightSVG from '@assets/svg/chevron-right.svg';

import { Container, IconContainer, TextInput } from './styles';
import { theme } from 'stitches.config';

export function Input() {
  return (
    <Container>
      <TextInput
        placeholderTextColor={theme.colors.gray2}
        placeholder="Adicione uma tarefa"
      />

      <IconContainer activeOpacity={0.7}>
        <ChevronRightSVG />
      </IconContainer>
    </Container>
  );
}
