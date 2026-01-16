import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCriarConta = () => {
    navigation.navigate('CriarConta');
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Hotel</Text>

      {/* Imagem de destaque */}
      <Image
        source={require('../assets/hotel.png')}
        style={styles.heroImage}
        resizeMode="contain"
      />

      {/* Descrição */}
      <Text style={styles.description}>
        Descubra e reserve os melhores hotéis no Brasil. Simples, rápido e confiável.
      </Text>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={handleCriarConta}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={handleLogin}>
          <Text style={styles.buttonTextAlt}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e4da1',
    marginBottom: 20,
  },
  heroImage: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4a4a4a',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#1e4da1',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  buttonSecondary: {
    borderColor: '#1e4da1',
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonTextAlt: {
    color: '#1e4da1',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
