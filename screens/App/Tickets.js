import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icons from expo vector icons

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  const loadTickets = async () => {
    try {
      const storedTickets = await AsyncStorage.getItem('tickets');
      if (storedTickets) {
        setTickets(JSON.parse(storedTickets));
      }
    } catch (error) {
      console.error("Failed to load tickets from storage", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTickets();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.ticket}>
      <View style={styles.iconContainer}>
        {item.processed ? (
          <MaterialIcons name="check-circle" size={24} color="green" />
        ) : (
          <MaterialIcons name="cancel" size={24} color="red" />
        )}
      </View>
      <View style={styles.ticketInfo}>
        <Text style={styles.text}>Ticket Number: {item.ticketId}</Text>
        <Text style={styles.text}>Start Time: {item.startTime}</Text>
        <Text style={styles.text}>Price: {item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {tickets.length > 0 ? (
        <FlatList
          data={tickets}
          renderItem={renderItem}
          keyExtractor={item => item.ticketId.toString()}
        />
      ) : (
        <Text style={styles.noTicketsText}>No tickets saved</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  ticket: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e3e5fe',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 10,
  },
  ticketInfo: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  noTicketsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});
