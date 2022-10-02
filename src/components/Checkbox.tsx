import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import CheckboxCheckedSvg from '~/assets/svg/checkbox-checked.svg';
import CheckboxUncheckedSvg from '~/assets/svg/checkbox-unchecked.svg';

type CheckboxProps = TouchableOpacityProps & {
  done?: boolean;
};

export function Checkbox({ done = false, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity className="h-6 w-6 items-center justify-center" {...rest}>
      {done ? <CheckboxCheckedSvg /> : <CheckboxUncheckedSvg />}
    </TouchableOpacity>
  );
}
