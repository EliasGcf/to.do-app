import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import { colors } from '~/styles/colors';

type TextInputProps = RNTextInputProps;

export function TextInput({ ...rest }: TextInputProps) {
  return (
    <RNTextInput
      {...rest}
      className="text-base leading-5 bg-gray-500 border-2 border-gray-700 text-gray-100 flex-1 h-[54px] rounded-md px-4 focus:border-purple-dark font-sans"
      placeholderTextColor={colors.gray[300]}
    />
  );
}
