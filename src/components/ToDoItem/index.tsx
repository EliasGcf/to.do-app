import React, { useEffect, useReducer, useRef, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EditSVG from '@assets/svg/edit.svg';
import TrashSVG from '@assets/svg/trash.svg';

import { ToDo } from '@context/ToDo/context';

import { Checkbox } from '@components/Checkbox';

import {
  ActionsButton,
  ActionsButtonDivider,
  Container,
  Main,
  ToDoTextInput,
} from './styles';
import { useToDos } from '@hooks/useToDos';
import { scale } from 'react-native-size-matters';

type ToDoItemProps = {
  data: ToDo;
  showGradient?: boolean;
};

export function ToDoItem({ data, showGradient = false }: ToDoItemProps) {
  const { toggleDone, removeToDo, changeToDoMessage } = useToDos();

  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const inputTextValue = useRef(data.message);

  function handleCheckboxChange() {
    setIsEditing(false);
    toggleDone(data.id);
  }

  function handleTextInputBlur() {
    setIsEditing(false);

    if (inputTextValue.current.trim() !== data.message) {
      changeToDoMessage({
        id: data.id,
        message: inputTextValue.current.trim(),
      });
    }
  }

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={
        showGradient
          ? ['rgba(196, 196, 196, 0.24)', 'rgba(196, 196, 196, 0)']
          : ['transparent', 'transparent']
      }
    >
      <Container editing={isEditing}>
        <Main>
          <Checkbox isChecked={data.done} onChange={handleCheckboxChange} />

          <ToDoTextInput
            ref={inputRef}
            checked={data.done}
            editable={isEditing}
            defaultValue={data.message}
            onBlur={handleTextInputBlur}
            onChangeText={(text) => (inputTextValue.current = text)}
          />
        </Main>

        <ActionsButton>
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)} activeOpacity={0.7}>
            <EditSVG width={scale(24)} height={scale(24)} />
          </TouchableOpacity>

          <ActionsButtonDivider />

          <TouchableOpacity onPress={() => removeToDo(data.id)} activeOpacity={0.7}>
            <TrashSVG width={scale(24)} height={scale(24)} />
          </TouchableOpacity>
        </ActionsButton>
      </Container>
    </LinearGradient>
  );
}
