import React, { useState } from 'react';

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
      {isChecked && <CheckSVG />}
    </Container>
  );
}
