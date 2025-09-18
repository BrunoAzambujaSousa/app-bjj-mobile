// App.tsx

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';

// 1. Importamos as ferramentas necessárias
import { useFonts } from 'expo-font';

export default function App() {
  // 2. Carregamos as fontes
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
  });

  // 3. Enquanto as fontes não forem carregadas, não mostramos nada
  //    (ou poderíamos mostrar uma tela de "carregando...")
  if (!fontsLoaded) {
    return null;
  }

  // 4. Quando as fontes estiverem prontas, mostramos a tela de login
  return <LoginScreen />;
}