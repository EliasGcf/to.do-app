import React, { ReactNode, useState } from 'react';

import { ChangeToDoMessageParams, ToDo, ToDoContext } from '@context/ToDo/context';
import { useAsyncStorage } from '@hooks/useAsyncStorage';

type ToDoContextProviderProps = {
  children: ReactNode;
};

export function ToDoContextProvider({ children }: ToDoContextProviderProps) {
  const [toDos, setToDos] = useAsyncStorage<ToDo[]>('@to.do:ToDos', []);

  function addToDo(message: string) {
    const newToDo = {
      id: String(Date.now()),
      done: false,
      message,
    };

    setToDos([...toDos, newToDo]);
  }

  function changeToDoMessage({ id, message }: ChangeToDoMessageParams) {
    const newToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, message };
      }

      return toDo;
    });

    setToDos(newToDos);
  }

  function markAsDone(id: string) {
    const newToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, done: true };
      }

      return toDo;
    });

    setToDos(newToDos);
  }

  function toggleDone(id: string) {
    const newToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, done: !toDo.done };
      }

      return toDo;
    });

    setToDos(newToDos);
  }

  function removeToDo(id: string) {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);

    setToDos(newToDos);
  }

  return (
    <ToDoContext.Provider
      value={{ toDos, addToDo, changeToDoMessage, toggleDone, removeToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
