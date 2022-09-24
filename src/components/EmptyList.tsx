import { Image, View } from 'react-native';

import clipboardImg from '~/assets/images/clipboard.png';

import { Text } from '~/components/Text';

export function EmptyList() {
  return (
    <View className="mt-12 items-center">
      <Image source={clipboardImg} />

      <Text className="text-gray-300 mt-4 font-bold">
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text className="text-gray-300">Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
