import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/styles'; // Mantido seu estilo global

const historico = [
  { id: '1', date: '02/05/2024', location: 'Hotel Golden Blue', court: 7, time: '20:00' },
  { id: '2', date: '26/04/2024', location: 'Hotel Rola Estilo', court: 7, time: '21:30' },
  { id: '3', date: '12/03/2024', location: 'Hotel KiChute', court: 5, time: '16:30' },
  { id: '4', date: '07/01/2024', location: 'Hotel Golden Blue', court: 5, time: '22:00' },
];

const HistoricoScreen = () => {
  const renderItem = ({ item }) => (
    <View style={historicoStyles.card}>
      <Text style={historicoStyles.cardText}>{item.date} - {item.location}</Text>
      <Text style={historicoStyles.cardText}>Quarto: {item.court}</Text>
      <Text style={historicoStyles.cardText}>Horário: {item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={historicoStyles.header}>
        <Text style={historicoStyles.headerText}>Histórico de Reservas</Text>
      </View>
      <FlatList
        data={historico}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={historicoStyles.listContainer}
      />
    </View>
  );
};

const historicoStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e4da1',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#e3edff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#1e3a75',
    marginBottom: 4,
  },
});

export default HistoricoScreen;
