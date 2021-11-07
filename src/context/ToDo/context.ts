import { createContext } from 'react';

export type ToDo = {
  id: string;
  done: boolean;
  message: string;
};

export type ChangeToDoMessageParams = {
  id: string;
  message: string;
};

export type ToDoContextData = {
  toDos: ToDo[];
  addToDo: (message: string) => void;
  changeToDoMessage: (params: ChangeToDoMessageParams) => void;
  markAsDone: (id: string) => void;
  markAsUnDone: (id: string) => void;
  removeToDo: (id: string) => void;
};

export const ToDoContext = createContext({} as ToDoContextData);
