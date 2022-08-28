import { View } from 'react-native';

import { Header } from '~/components/Header';
import { TextInput } from '~/components/TextInput';

export function Home() {
  return (
    <View className="flex-1 bg-gray-600">
      <Header />

      <View className="px-6 mt-[-30px]">
        <TextInput placeholder="Adicione uma nova tarefa" />
      </View>
    </View>
  );
}
