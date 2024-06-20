import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

// Fake JSON data for ticket history
const fakeTicketData = [
  { ticketId: 1, date: '2023-06-19', price: '20' },
  { ticketId: 2, date: '2023-06-18', price: '25' },
  { ticketId: 3, date: '2023-06-17', price: '30' },
  // Add more fake tickets as needed
];

export default function History() {
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [ticketHistory, setTicketHistory] = useState([]);

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
    <List.Item
      title={`Ticket ID: ${item.ticketId}`}
      description={`Date: ${item.date}, Price: ${item.price}`}
      left={props => <List.Icon {...props} icon="ticket" />}
    />
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
});
