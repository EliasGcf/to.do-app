import { useState } from 'react';
import { TouchableOpacity, View, ViewProps } from 'react-native';

import TrashSvg from '~/assets/svg/trash.svg';

import { Checkbox } from '~/components/Checkbox';
import { Text } from '~/components/Text';

type TodoProps = ViewProps & {
  text: string;
};

export function Todo({ text, ...rest }: TodoProps) {
  const [done, setDone] = useState(false);

  return (
    <View
      className={`p-3 bg-gray-500 min-h-[64px] flex-row items-center rounded-lg border-[1.5px] ${
        done ? 'border-gray-500' : 'border-gray-400'
      }`}
      {...rest}
    >
      <Checkbox className="mr-2" done={done} onPress={() => setDone(!done)} />

      <Text className={`flex-1 ${done ? 'text-gray-300 line-through' : ''}`}>{text}</Text>

      <TouchableOpacity className="h-8 w-8 items-center justify-center rounded">
        <TrashSvg />
      </TouchableOpacity>
    </View>
  );
}
