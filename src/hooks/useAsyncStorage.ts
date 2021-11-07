import { useState, useCallback, useEffect, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function useAsyncStorage<S>(key: string, initialValue: S): Response<S> {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValueAsync = useCallback(
    async (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        await AsyncStorage.setItem(key, JSON.stringify(valueToStore));

        setStoredValue(valueToStore);
      } catch (err) {
        console.log(err);
      }
    },
    [key, storedValue],
  );

  useEffect(() => {
    async function loadStoredValue() {
      try {
        const value = await AsyncStorage.getItem(key);

        if (!value) return;

        setStoredValue(JSON.parse(value));
      } catch (err) {
        console.log(err);
      }
    }

    loadStoredValue();
  }, []);

  return [storedValue, setValueAsync];
}
