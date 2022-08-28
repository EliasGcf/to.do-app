import { View } from 'react-native';

import { Text } from '~/components/Text';
import { TextInput } from '~/components/TextInput';

export function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-600">
      <Text className="">Home</Text>
      <TextInput placeholder="Adicione uma nova tarefa" />
    </View>
  );
}
