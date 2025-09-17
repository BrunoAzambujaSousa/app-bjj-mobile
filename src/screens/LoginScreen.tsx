// src/screens/LoginScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Este é um "componente de função". É a forma padrão de criar pedaços de tela no React.
const LoginScreen = () => {
  return (
    // A View é como uma <div> da web. É um container para outros elementos.
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
    </View>
  );
};

// Aqui criamos nossos estilos, de forma parecida com o CSS.
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar a tela inteira
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    backgroundColor: '#f5f5f5', // Um fundo cinza claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

// Precisamos exportar nosso componente para que outros arquivos possam usá-lo.
export default LoginScreen;