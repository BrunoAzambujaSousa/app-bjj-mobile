// src/screens/LoginScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image, 
} from 'react-native';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Image
        source={require('../assets/cavalcante-bjj.jpg')} // Caminho para a sua imagem
        style={styles.logo}
      />

      <Text style={styles.title}>Cavalcante BJJ School</Text>
      <Text style={styles.subtitle}>Acesse sua conta</Text>

      {/* Campo de Email */}
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        secureTextEntry={true}
      />

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão para Criar Conta */}
      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Ainda não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // NOVO: Estilo para a logo
  logo: {
    width: 300, // Largura da imagem
    height: 300, // Altura da imagem
    resizeMode: 'contain', // Garante que a imagem caiba no espaço sem distorcer
    marginBottom: 10 // Espaço entre a logo e o título
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfcfcff',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#080000ff',
    marginBottom: 5,
    fontFamily: 'Roboto-Bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#080000ff',
    marginBottom: 30,
    fontFamily: 'Roboto-Regular',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fffefeff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#8b0209ff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 20,
  },
  linkButtonText: {
    color: '#000307ff',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
});

export default LoginScreen;