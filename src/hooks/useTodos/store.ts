import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { TodosState, TodosStore } from '~/hooks/useTodos/types';

const todosState: TodosState = (set) => {
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

  function add(text: string) {
    const todo = {
      id: String(uuid.v4()),
      text,
      done: false,
    };

    set((state) => ({ todos: [...state.todos, todo] }));
  }

  return {
    todos: [],
    toggleDone,
    remove,
    add,
  };
};

export const useTodos = create(
  persist<TodosStore>(todosState, {
    name: '@todo:todos',
    getStorage: () => AsyncStorage,
  })
);
