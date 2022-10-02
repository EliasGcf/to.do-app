import { Image, View } from 'react-native';

import clipboardImg from '~/assets/images/clipboard.png';

import { Text } from '~/components/Text';

export function EmptyList() {
  return (
    <View className="items-center pt-12 border-t border-t-gray-400">
      <Image source={clipboardImg} />

      <Text className="text-gray-300 mt-4 font-bold">
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text className="text-gray-300">Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
