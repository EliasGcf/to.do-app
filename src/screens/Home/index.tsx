import React from 'react';

import { Header } from '@components/Header';
import { ToDoList } from '@components/ToDoList';

import { Container, ListWrapper } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <ListWrapper>
        <ToDoList />
      </ListWrapper>
    </Container>
  );
}
