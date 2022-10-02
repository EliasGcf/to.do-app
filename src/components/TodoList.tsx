import { FlatList, View } from 'react-native';

import { EmptyList } from '~/components/EmptyList';
import { Label } from '~/components/Label';
import { Todo } from '~/components/Todo';

import { useTodos } from '~/hooks/useTodos';

export function TodoList() {
  const todos = useTodos((state) => state.todos);

  return (
    <View>
      <View className="flex-row justify-between mt-8 mb-5">
        <Label variant="created" count={0} />
        <Label variant="completed" count={0} />
      </View>

      <FlatList
        data={todos}
        className="h-full"
        ListEmptyComponent={EmptyList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Todo text={item.text} className={index !== 0 ? 'mt-2' : ''} />
        )}
      />
    </View>
  );
}
