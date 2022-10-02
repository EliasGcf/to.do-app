import { FlatList, View } from 'react-native';

import { EmptyList } from '~/components/EmptyList';
import { Label } from '~/components/Label';
import { Todo } from '~/components/Todo';

const DATA = [
  { id: '1', text: 'First Item', done: false },
  { id: '2', text: 'Second Item', done: true },
  { id: '3', text: 'Third Item', done: false },
  { id: '4', text: 'Fourth Item', done: true },
];

export function TodoList() {
  return (
    <View>
      <View className="flex-row justify-between mt-8 mb-5">
        <Label variant="created" count={0} />
        <Label variant="completed" count={0} />
      </View>

      <FlatList
        data={DATA}
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
