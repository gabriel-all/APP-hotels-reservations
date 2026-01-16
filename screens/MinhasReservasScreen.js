import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const reservations = [
  { id: '1', name: 'Hotel 1', time: '10:00 - 11:00', status: 'Pendente', latitude: -23.55052, longitude: -46.633308 },
  { id: '2', name: 'Hotel 2', time: '11:00 - 12:00', status: 'Confirmada', latitude: -23.55152, longitude: -46.634308 },
  { id: '3', name: 'Hotel 3', time: '12:00 - 13:00', status: 'Cancelada', latitude: -23.55252, longitude: -46.635308 },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Pendente':
      return 'orange';
    case 'Confirmada':
      return 'green';
    case 'Cancelada':
      return 'red';
    default:
      return 'black';
  }
};

const ReservationCard = ({ name, time, status, latitude, longitude }) => {
  const [expanded, setExpanded] = useState(false);

  // Evita importar MapView no web
  const MapView = Platform.OS !== 'web' ? require('react-native-maps').default : null;
  const Marker = Platform.OS !== 'web' ? require('react-native-maps').Marker : null;

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
      <View style={[styles.card, { borderColor: getStatusColor(status) }]}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.courtCardText}>{time}</Text>
        <Text style={[styles.status, { color: getStatusColor(status) }]}>Status: {status}</Text>
        {expanded && (
          Platform.OS === 'web' ? (
            <Text style={{ marginTop: 10, fontStyle: 'italic' }}>Mapa indisponível na versão web.</Text>
          ) : (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
          )
        )}
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.hoteisContainer}>
        <Text style={styles.hoteisText}>Hoteis</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.cardTitle}>Minhas Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReservationCard
            name={item.name}
            time={item.time}
            status={item.status}
            latitude={item.latitude}
            longitude={item.longitude}
          />
        )}
      />
    </View>
  );
};

export default App;
