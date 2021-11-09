import React from 'react';
import { AnimatePresence, MotiView } from 'moti';
import { ScrollView, Dimensions } from 'react-native';

import { useToDos } from '@hooks/useToDos';

import { ToDoItem } from '@components/ToDoItem';

const deviceWidth = Dimensions.get('screen').width;

export function ToDoList() {
  const { toDos } = useToDos();

  return (
    <ScrollView>
      <AnimatePresence>
        {toDos.map((toDo, index) => (
          <MotiView
            key={toDo.id}
            from={{ translateX: deviceWidth, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: -deviceWidth, opacity: 0 }}
          >
            <ToDoItem key={toDo.id} showGradient={index % 2 === 0} data={toDo} />
          </MotiView>
        ))}
      </AnimatePresence>
    </ScrollView>
  );
}
