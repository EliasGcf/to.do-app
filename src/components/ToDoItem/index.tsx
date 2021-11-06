import React, { useEffect, useReducer, useRef, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EditSVG from '@assets/svg/edit.svg';
import TrashSVG from '@assets/svg/trash.svg';

import { Row } from '@components/utils/Row';
import { Checkbox } from '@components/Checkbox';

import {
  ActionsButton,
  ActionsButtonDivider,
  Container,
  Main,
  ToDoTextInput,
} from './styles';

type ToDoItemProps = {
  text: string;
  showGradient?: boolean;
};

export function ToDoItem({ text, showGradient = false }: ToDoItemProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, toggleIsEditing] = useReducer((state) => !state, false);

  const inputRef = useRef<TextInput>(null);

  function handleCheckboxChange(newValue: boolean) {
    setIsChecked(newValue);
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
          <Checkbox onChange={handleCheckboxChange} />

          <ToDoTextInput
            ref={inputRef}
            editable={isEditing}
            defaultValue={text}
            checked={isChecked}
          />
        </Main>

        <ActionsButton>
          <TouchableOpacity onPress={toggleIsEditing} activeOpacity={0.7}>
            <EditSVG />
          </TouchableOpacity>

          <ActionsButtonDivider />

          <TouchableOpacity activeOpacity={0.7}>
            <TrashSVG />
          </TouchableOpacity>
        </ActionsButton>
      </Container>
    </LinearGradient>
  );
}
