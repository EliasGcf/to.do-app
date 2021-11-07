import { ToDoItem } from '@components/ToDoItem';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

// import { Container } from './styles';

type ToDo = {
  id: string;
  message: string;
};

export function ToDoList() {
  return (
    <FlatList<ToDo>
      data={[
        { id: '1', message: 'ToDo 1' },
        { id: '2', message: 'ToDo 2' },
      ]}
      keyExtractor={(toDo) => toDo.id}
      renderItem={({ item: toDo, index }) => (
        <ToDoItem showGradient={index % 2 === 0} text={toDo.message} />
      )}
    />
  );
}
