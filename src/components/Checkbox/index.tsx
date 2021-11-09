import React from 'react';
import { MotiView } from 'moti';
import { scale } from 'react-native-size-matters';

import CheckSVG from '@assets/svg/check.svg';

import { Container } from './styles';

type CheckboxProps = {
  isChecked: boolean;
  onChange?: (value: boolean) => void;
};

export function Checkbox({ onChange, isChecked }: CheckboxProps) {
  function handleChange() {
    if (onChange) onChange(!isChecked);
  }

  return (
    <Container onPress={handleChange} checked={isChecked}>
      {isChecked && (
        <MotiView from={{ scale: 0 }} animate={{ scale: 1 }}>
          <CheckSVG width={scale(10)} height={scale(8)} />
        </MotiView>
      )}
    </Container>
  );
}
