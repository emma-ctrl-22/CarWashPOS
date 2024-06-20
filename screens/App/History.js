import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

// Fake JSON data for ticket history
const fakeTicketData = [
  { ticketId: 1, date: '2023-06-19', price: '20' },
  { ticketId: 2, date: '2023-06-18', price: '25' },
  { ticketId: 3, date: '2023-06-17', price: '30' },
  { ticketId: 4, date: '2023-06-16', price: '33' },
  { ticketId: 5, date: '2023-06-15', price: '37' },
  { ticketId: 6, date: '2023-06-20', price: '13' },
  { ticketId: 7, date: '2023-06-17', price: '24' },
  { ticketId: 8, date: '2023-06-14', price: '28' },
  { ticketId: 9, date: '2023-06-13', price: '32' },
  { ticketId: 10, date: '2023-06-12', price: '35' },
  { ticketId: 11, date: '2023-06-11', price: '38' }, // Changed ID to 11 for uniqueness
  // Add more fake tickets as needed
];

export default function History() {
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState(new Date('2023-06-01')); // Set a reasonable default
  const [toDate, setToDate] = useState(new Date());
  const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [ticketHistory, setTicketHistory] = useState(fakeTicketData);

  useEffect(() => {
    fetchTicketHistory();
  }, []);

  const fetchTicketHistory = (fromDate = new Date(), toDate = new Date(), search = '') => {
    const filteredTickets = fakeTicketData.filter(ticket => {
      const ticketDate = moment(ticket.date);
      const isWithinDateRange = ticketDate.isBetween(moment(fromDate), moment(toDate), undefined, '[]');
      const matchesSearch = search ? ticket.ticketId.toString().includes(search) : true;
      return isWithinDateRange && matchesSearch;
    });
    console.log('From date:', fromDate)
    console.log('Filtered tickets:', filteredTickets)
    setTicketHistory(filteredTickets);
  };

  const handleFromDateConfirm = (date) => {
    setFromDate(date);
    setFromDatePickerVisibility(false);
  };

  const handleToDateConfirm = (date) => {
    setToDate(date);
    setToDatePickerVisibility(false);
  };

  const renderTicket = ({ item }) => (
    <View style={styles.ticketItem}>
      <Text style={styles.ticketTitle}>Ticket ID: {item.ticketId}</Text>
      <Text style={styles.ticketDescription}>Date: {item.date}, Price: ${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        label="Search Ticket ID"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => setFromDatePickerVisibility(true)} style={styles.datePicker}>
          <Text>From: {moment(fromDate).format('YYYY-MM-DD')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToDatePickerVisibility(true)} style={styles.datePicker}>
          <Text>To: {moment(toDate).format('YYYY-MM-DD')}</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={() => fetchTicketHistory(fromDate, toDate, search)}>
        Search
      </Button>
      <FlatList
        data={ticketHistory}
        renderItem={renderTicket}
        keyExtractor={item => item.ticketId.toString()}
        style={styles.list}
      />
      <DateTimePickerModal
        isVisible={isFromDatePickerVisible}
        mode="date"
        onConfirm={handleFromDateConfirm}
        onCancel={() => setFromDatePickerVisibility(false)}
      />
      <DateTimePickerModal
        isVisible={isToDatePickerVisible}
        mode="date"
        onConfirm={handleToDateConfirm}
        onCancel={() => setToDatePickerVisibility(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  list: {
    marginTop: 10,
  },
  ticketItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ticketDescription: {
    fontSize: 14,
    color: '#555',
  },
});
