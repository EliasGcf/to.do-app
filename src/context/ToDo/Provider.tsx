import React, { ReactNode, useState } from 'react';
import { ChangeToDoMessageParams, ToDo, ToDoContext } from '@context/ToDo/context';

type ToDoContextProviderProps = {
  children: ReactNode;
};

export function ToDoContextProvider({ children }: ToDoContextProviderProps) {
  const [toDos, setToDos] = useState<ToDo[]>([]);

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

  function markAsUnDone(id: string) {
    const newToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, done: false };
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
      value={{ toDos, addToDo, changeToDoMessage, markAsDone, markAsUnDone, removeToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
