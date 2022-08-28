import { View } from 'react-native';

import LogoSvg from '~/assets/svg/logo.svg';

export function Header() {
  return (
    <View className="bg-gray-700 items-center justify-center h-[173px]">
      <LogoSvg />
    </View>
  );
}
