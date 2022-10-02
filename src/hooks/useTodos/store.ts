import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { TodosState, TodosStore } from '~/hooks/useTodos/types';

const todosState: TodosState = (set, get) => {
  return {
    todos: [],
  };
};

export const useTodos = create(
  persist<TodosStore>(todosState, {
    name: '@todo:todos',
    getStorage: () => AsyncStorage,
  })
);
