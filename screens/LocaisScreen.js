import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import styles from '../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const locais = [
  { id: '1', name: 'Hotel luxo', numCourts: 9, sizes: '5 - 7', rating: 4.5 },
  { id: '2', name: 'Five Star', numCourts: 5, sizes: '5 - 7', rating: 4.8 },
  { id: '3', name: 'Hotel sombroso', numCourts: 15, sizes: '5', rating: 4.2 },
  { id: '4', name: 'Beach Hotel', numCourts: 11, sizes: '5', rating: 3.8 },
  { id: '5', name: 'Portal sol', numCourts: 17, sizes: '5', rating: 4.0 },
];

const LocaisScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDays, setSelectedDays] = useState(null);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleSelectLocation = (location) => {
    if (location.id === selectedLocation) {
      setSelectedLocation(null);
      setSelectedDays(null);
      setSelectedTime(new Date());
    } else {
      setSelectedLocation(location.id);
    }
  };

  const handleDaysSelect = (days) => {
    setSelectedDays(days);
  };

  const handleTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentDate);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const renderItem = ({ item }) => (
    <View style={locaisStyles.card}>
      <TouchableOpacity onPress={() => handleSelectLocation(item)}>
        <View style={locaisStyles.cardHeader}>
          <Text style={locaisStyles.cardTitle}>{item.name}</Text>
        </View>
        <Text style={locaisStyles.cardText}>Nº de quartos disponíveis: {item.numCourts}</Text>
        <View style={locaisStyles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <MaterialIcons
              key={index}
              name="star"
              size={24}
              color={index < Math.round(item.rating) ? '#FFD700' : '#666'}
            />
          ))}
        </View>
        <Text style={locaisStyles.cardText}>Tamanhos: {item.sizes}</Text>
      </TouchableOpacity>
      {selectedLocation === item.id && (
        <View style={locaisStyles.bookingOptions}>

          {/* Selecionar número de dias */}
          <Text style={locaisStyles.optionTitle}>Selecione quantos dias vai ficar:</Text>
          <View style={locaisStyles.optionsContainer}>
            {[1, 2, 3, 4, 5].map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  locaisStyles.optionButton,
                  selectedDays === day && locaisStyles.selectedOptionButton,
                ]}
                onPress={() => handleDaysSelect(day)}
              >
                <Text
                  style={[
                    locaisStyles.optionText,
                    selectedDays === day && locaisStyles.selectedOptionText,
                  ]}
                >
                  {day} {day === 1 ? 'dia' : 'dias'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Selecione o Horário */}
          <Text style={locaisStyles.optionTitle}>Selecione o Horário:</Text>
          <TouchableOpacity onPress={showTimepicker} style={locaisStyles.optionButton}>
            <Text style={locaisStyles.optionText}>
              {selectedTime ? selectedTime.toLocaleTimeString() : 'Selecionar horário'}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}

          <TouchableOpacity style={locaisStyles.reserveButton}>
            <Text style={locaisStyles.reserveButtonText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={locaisStyles.header}>
        <Text style={locaisStyles.headerText}>Locais</Text>
        <TouchableOpacity>
          <Text style={locaisStyles.filterText}>Filtros</Text>
          <MaterialIcons name="filter-list" size={24} color="#90CAF9" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={locais}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={locaisStyles.listContainer}
      />
    </View>
  );
};

const locaisStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#90CAF9',
  },
  filterText: {
    fontSize: 18,
    color: '#90CAF9',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#2c2c2c',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#90CAF9',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bookingOptions: {
    marginTop: 16,
    backgroundColor: '#3a3a3a',
    padding: 16,
    borderRadius: 8,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#90CAF9',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#4a4a4a',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#90CAF9',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#000',
  },
  reserveButton: {
    backgroundColor: '#90CAF9',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocaisScreen;
