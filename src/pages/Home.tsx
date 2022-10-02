import { View } from 'react-native';

import { Header } from '~/components/Header';
import { TodoForm } from '~/components/TodoForm';
import { TodoList } from '~/components/TodoList';

export function Home() {
  return (
    <View className="flex-1 bg-gray-600">
      <Header />

      <View className="px-6 mt-[-30px]">
        <TodoForm />
        <TodoList />
      </View>
    </View>
  );
}
