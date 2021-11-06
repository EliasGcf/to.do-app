import React from 'react';

import { Header } from '@components/Header';
import { ToDoItem } from '@components/ToDoItem';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <ToDoItem showGradient text="Arrumar a cama" />
      <ToDoItem text="Ser feliz" />
      <ToDoItem showGradient text="Lavar meu possante" />
    </Container>
  );
}
