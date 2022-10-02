import { View } from 'react-native';

import { Header } from '~/components/Header';
import { Label } from '~/components/Label';
import { Todo } from '~/components/Todo';
import { TodoForm } from '~/components/TodoForm';

export function Home() {
  return (
    <View className="flex-1 bg-gray-600">
      <Header />

      <View className="px-6 mt-[-30px]">
        <TodoForm />

        <View className="flex-row justify-between mt-8 mb-5">
          <Label variant="created" count={0} />
          <Label variant="completed" count={0} />
        </View>

        {/* <EmptyList /> */}

        <View className="gap-2">
          <Todo text="Integer urna interdum massa libero auctor neque turpis turpis semper." />
          <Todo text="Integer urna interdum massa libero auctor neque turpis turpis semper." />
          <Todo text="Integer urna interdum massa libero auctor neque turpis turpis semper." />
        </View>
      </View>
    </View>
  );
}
