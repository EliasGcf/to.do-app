import { StateCreator } from 'zustand';

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export type TodosStore = {
  todos: Todo[];
  toggleDone: (id: string) => void;
  remove: (id: string) => void;
};

export type TodosState = StateCreator<
  TodosStore,
  [['zustand/persist', unknown]],
  [],
  TodosStore
>;
