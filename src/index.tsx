import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { Home } from '~/pages/Home';

SplashScreen.preventAutoHideAsync();

export function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <StatusBar style="light" />

      <Home />
    </>
  );
}
