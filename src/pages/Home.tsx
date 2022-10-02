import { Pressable, View } from 'react-native';

import PlusSvg from '~/assets/svg/plus.svg';

import { Header } from '~/components/Header';
import { Label } from '~/components/Label';
import { TextInput } from '~/components/TextInput';
import { Todo } from '~/components/Todo';

export function Home() {
  return (
    <View className="flex-1 bg-gray-600">
      <Header />

      <View className="px-6 mt-[-30px]">
        <View className="flex-row items-center">
          <TextInput placeholder="Adicione uma nova tarefa" />

          <Pressable className="bg-blue-dark p-4 rounded-md ml-1 active:bg-blue">
            <PlusSvg />
          </Pressable>
        </View>

        <View className="flex-row justify-between mt-8 mb-5">
          <Label variant="created" count={0} />
          <Label variant="completed" count={0} />
        </View>

        {/* <EmptyList /> */}

        <Todo text="Integer urna interdum massa libero auctor neque turpis turpis semper." />
      </View>
    </View>
  );
}
