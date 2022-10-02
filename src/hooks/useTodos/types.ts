import { StateCreator } from 'zustand';

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export type TodosStore = {
  todos: Todo[];
};

export type TodosState = StateCreator<
  TodosStore,
  [['zustand/persist', unknown]],
  [],
  TodosStore
>;
