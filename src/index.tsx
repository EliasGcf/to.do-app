import React from 'react';
import { useFonts } from 'expo-font';
import { theme } from 'stitches.config';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
  Inter_500Medium,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { ToDoContextProvider } from '@context/ToDo/Provider';

import { Home } from '@screens/Home';

export function MyApp() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />

      <ToDoContextProvider>
        <Home />
      </ToDoContextProvider>
    </>
  );
}
