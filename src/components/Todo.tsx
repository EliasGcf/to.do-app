import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import TrashSvg from '~/assets/svg/trash.svg';

import { Checkbox } from '~/components/Checkbox';
import { Text } from '~/components/Text';

type TodoProps = {
  text: string;
};

export function Todo({ text }: TodoProps) {
  const [done, setDone] = useState(false);

  return (
    <View className="p-3 bg-gray-500 min-h-[64px] flex-row items-center rounded-lg border-[1.5px] border-gray-400">
      <Checkbox className="mr-2" done={done} onPress={() => setDone(!done)} />

      <Text className="flex-1">{text}</Text>

      <TouchableOpacity className="h-8 w-8 items-center justify-center rounded">
        <TrashSvg />
      </TouchableOpacity>
    </View>
  );
}
