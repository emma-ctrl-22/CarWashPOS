import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
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

    loadTickets();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.ticket}>
      <Text style={styles.text}>Ticket Number: {item.ticketId}</Text>
      <Text style={styles.text}>Start Time: {item.startTime}</Text>
      <Text style={styles.text}>Price: {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Saved Tickets</Text>
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
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  ticket: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
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
