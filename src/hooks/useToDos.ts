import { useContext } from 'react';

import { ToDoContext } from '@context/ToDo/context';

export function useToDos() {
  const toDoContext = useContext(ToDoContext);

  return toDoContext;
}
