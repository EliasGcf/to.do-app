import React, { useState } from 'react';

import LogoSVG from '@assets/svg/logo.svg';

import { Container, Info, HeaderInput, InfoCount } from './styles';
import { useToDos } from '@hooks/useToDos';
import { scale } from 'react-native-size-matters';

export function Header() {
  const { addToDo, toDos } = useToDos();

  const [message, setMessage] = useState('');

  function handleInputSubmit() {
    if (!message.trim()) return;

    addToDo(message);
    setMessage('');
  }

  return (
    <>
      <Container>
        <LogoSVG width={scale(72)} height={scale(20)} />
        <Info>
          Você tem{' '}
          <InfoCount>
            {toDos.length === 0 ? '0' : String(toDos.length).padStart(2, '0')} tarefas
          </InfoCount>
        </Info>
      </Container>

      <HeaderInput
        value={message}
        onSubmit={handleInputSubmit}
        placeholder="Adicione uma tarefa"
        onChangeText={(text) => setMessage(text)}
      />
    </>
  );
}
