import { FlatList, View } from 'react-native';

import { EmptyList } from '~/components/EmptyList';
import { Label } from '~/components/Label';
import { TodoItem } from '~/components/TodoItem';

import { useTodos } from '~/hooks/useTodos';

export function TodoList() {
  const todos = useTodos((state) => state.todos);

  const doneTodos = todos.filter((todo) => todo.done);

  return (
    <View>
      <View className="flex-row justify-between mt-8 mb-5">
        <Label variant="created" count={todos.length} />
        <Label variant="completed" count={doneTodos.length} />
      </View>

      <FlatList
        data={todos}
        className="h-full"
        ListEmptyComponent={EmptyList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return <TodoItem data={item} className={index !== 0 ? 'mt-2' : ''} />;
        }}
      />
    </View>
  );
}
