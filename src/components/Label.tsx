import { View } from 'react-native';

import { Text } from '~/components/Text';

type LabelProps = {
  variant: 'created' | 'completed';
  count: number;
};

export function Label({ variant, count }: LabelProps) {
  return (
    <View className="flex-row">
      <Text
        className={`font-bold ${variant === 'created' ? 'text-blue' : 'text-purple'}`}
      >
        {variant === 'created' ? 'Criadas' : 'Concluídas'}
      </Text>

      <View className="bg-gray-400 px-2 py-[2px] rounded-full ml-2">
        <Text className="text-gray-200 font-bold text-xs">{count}</Text>
      </View>
    </View>
  );
}
