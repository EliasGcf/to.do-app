import React, { useState } from 'react';

import CheckSVG from '@assets/svg/check.svg';

import { Container } from './styles';

type CheckboxProps = {
  onChange?: (value: boolean) => void;
};

export function Checkbox({ onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked((prevState) => !prevState);

    if (onChange) onChange(!isChecked);
  }

  return (
    <Container onPress={handleChange} checked={isChecked}>
      {isChecked && <CheckSVG />}
    </Container>
  );
}
