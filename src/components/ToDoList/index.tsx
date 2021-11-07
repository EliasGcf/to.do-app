import { ToDoItem } from '@components/ToDoItem';
import { ToDo } from '@context/ToDo/context';
import React from 'react';
import { FlatList } from 'react-native';
import { useToDos } from '@hooks/useToDos';

// import { Container } from './styles';

export function ToDoList() {
  const { toDos } = useToDos();

  return (
    <FlatList<ToDo>
      data={toDos}
      keyExtractor={(toDo) => toDo.id}
      renderItem={({ item: toDo, index }) => (
        <ToDoItem showGradient={index % 2 === 0} data={toDo} />
      )}
    />
  );
}
