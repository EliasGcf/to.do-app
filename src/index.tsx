import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';

import { ToDoItem } from '@components/ToDoItem';
import { Input } from '@components/Input';

export function MyApp() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Input />
      <ToDoItem showGradient text="Arrumar a cama" />
      <ToDoItem text="Ser feliz" />
      <ToDoItem showGradient text="Lavar meu possante" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
});
