import { useState } from 'react';
import { View, Pressable } from 'react-native';

import PlusSvg from '~/assets/svg/plus.svg';

import { TextInput } from '~/components/TextInput';

import { useTodos } from '~/hooks/useTodos';

export function TodoForm() {
  const addTodo = useTodos((state) => state.add);

  const [text, setText] = useState('');

  function handleFormSubmit() {
    if (text) {
      addTodo(text);
      setText('');
    }
  }

  return (
    <View className="flex-row items-center">
      <TextInput
        placeholder="Adicione uma nova tarefa"
        onChangeText={setText}
        value={text}
      />

      <Pressable
        disabled={!text}
        onPress={handleFormSubmit}
        className={`bg-blue-dark p-4 rounded-md ml-1 active:bg-blue ${
          !text ? 'opacity-70' : ''
        }`}
      >
        <PlusSvg />
      </Pressable>
    </View>
  );
}
