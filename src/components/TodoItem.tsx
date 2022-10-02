import { TouchableOpacity, View, ViewProps } from 'react-native';

import TrashSvg from '~/assets/svg/trash.svg';

import { Checkbox } from '~/components/Checkbox';
import { Text } from '~/components/Text';

import { useTodos } from '~/hooks/useTodos';
import { Todo } from '~/hooks/useTodos/types';

type TodoItemProps = ViewProps & {
  data: Todo;
};

export function TodoItem({ data, ...rest }: TodoItemProps) {
  const toggleDone = useTodos((state) => state.toggleDone);
  const removeTodo = useTodos((state) => state.remove);

  function handleOnCheckboxPress() {
    toggleDone(data.id);
  }

  function handleOnDeletePress() {
    removeTodo(data.id);
  }

  return (
    <View
      className={`p-3 bg-gray-500 min-h-[64px] flex-row items-center rounded-lg border-[1.5px] ${
        data.done ? 'border-gray-500' : 'border-gray-400'
      }`}
      {...rest}
    >
      <Checkbox className="mr-2" done={data.done} onPress={handleOnCheckboxPress} />

      <Text className={`flex-1 ${data.done ? 'text-gray-300 line-through' : ''}`}>
        {data.text}
      </Text>

      <TouchableOpacity
        onPress={handleOnDeletePress}
        className="h-8 w-8 items-center justify-center rounded"
      >
        <TrashSvg />
      </TouchableOpacity>
    </View>
  );
}
