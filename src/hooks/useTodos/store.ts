import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { TodosState, TodosStore } from '~/hooks/useTodos/types';

const todosState: TodosState = (set, get) => {
  function toggleDone(id: string) {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  }

  function remove(id: string) {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }

  return {
    todos: [],
    toggleDone,
    remove,
  };
};

export const useTodos = create(
  persist<TodosStore>(todosState, {
    name: '@todo:todos',
    getStorage: () => AsyncStorage,
  })
);
