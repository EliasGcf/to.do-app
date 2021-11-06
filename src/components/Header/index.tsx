import React from 'react';

import LogoSVG from '@assets/svg/logo.svg';

import { Container, Info, HeaderInput } from './styles';

export function Header() {
  return (
    <>
      <Container>
        <Info>
          <LogoSVG />
        </Info>
      </Container>

      <HeaderInput placeholder="Adicione uma tarefa" />
    </>
  );
}
