import { View, Pressable } from 'react-native';

import PlusSvg from '~/assets/svg/plus.svg';

import { TextInput } from '~/components/TextInput';

export function TodoForm() {
  return (
    <View className="flex-row items-center">
      <TextInput placeholder="Adicione uma nova tarefa" />

      <Pressable className="bg-blue-dark p-4 rounded-md ml-1 active:bg-blue">
        <PlusSvg />
      </Pressable>
    </View>
  );
}
