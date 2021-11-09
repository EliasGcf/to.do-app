import React, { useState } from 'react';

import CheckSVG from '@assets/svg/check.svg';

import { Container } from './styles';
import { scale } from 'react-native-size-matters';

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
      {isChecked && <CheckSVG width={scale(10)} height={scale(8)} />}
    </Container>
  );
}
