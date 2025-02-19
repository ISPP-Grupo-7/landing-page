import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Obtener el valor inicial del localStorage o usar el valor proporcionado
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error al leer del localStorage:', error);
      return initialValue;
    }
  });

  // Actualizar localStorage cuando el valor cambie
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error al escribir en localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
} 