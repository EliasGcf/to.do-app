import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const CHECK_SVG = `
<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.43107 0.342093L4.09914 4.67403L1.61667 2.19156L0.780762 3.02747L4.09914 6.34584L9.26698 1.178L8.43107 0.342093Z" fill="#F2F2F2"/>
</svg>
`;

type CheckboxProps = TouchableOpacityProps & {
  done?: boolean;
};

export function Checkbox({ done = false, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity className="h-6 w-6 items-center justify-center" {...rest}>
      <View
        className={`h-[18px] w-[18px] rounded-full border items-center justify-center ${
          done ? 'bg-purple-dark border-purple-dark' : 'border-blue'
        }`}
      >
        <SvgXml xml={CHECK_SVG} />
      </View>
    </TouchableOpacity>
  );
}
