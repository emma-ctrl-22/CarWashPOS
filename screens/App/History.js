import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import axios from 'axios';

export default function History() {
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState(moment().subtract(1, 'days').toDate()); // Yesterday
  const [toDate, setToDate] = useState(new Date());
  const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [ticketHistory, setTicketHistory] = useState([]);

  useEffect(() => {
    fetchTicketHistory(fromDate, toDate, search);
  }, []);

  const fetchTicketHistory = async (fromDate = new Date(), toDate = new Date(), search = '') => {
    try {
      const formattedFromDate = moment(fromDate).format('YYYY-MM-DD');
      const formattedToDate = moment(toDate).format('YYYY-MM-DD');

      const response = await axios.post('https://shaboshabo.wigal.com.gh/api/servicehistory', {
        start_date: formattedFromDate,
        end_date: formattedToDate,
      });
      
      // Log the API response to inspect the structure
      console.log('API Response:', response.data);

      // Access the 'data' property from the response
      const tickets = response.data.data || [];

      const filteredTickets = tickets.filter(ticket => {
        const ticketDate = moment(ticket.service_date);
        const isWithinDateRange = ticketDate.isBetween(moment(fromDate), moment(toDate), undefined, '[]');
        const matchesSearch = search ? ticket.ticket_number.toString().includes(search) : true;
        return isWithinDateRange && matchesSearch;
      });

      setTicketHistory(filteredTickets);
    } catch (error) {
      console.error('Error fetching ticket history:', error);
    }
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
      <Text style={styles.ticketTitle}>Ticket ID: {item.ticket_number}</Text>
      <Text style={styles.ticketDescription}>Date: {item.service_date}, Price: ${item.price}</Text>
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
        data={ticketHistory.slice().reverse()}
        renderItem={renderTicket}
        keyExtractor={item => item.ticket_number.toString()}
        style={styles.list}
      />
      <DateTimePickerModal
        isVisible={isFromDatePickerVisible}
        mode="date"
        onConfirm={handleFromDateConfirm}
        onCancel={() => setFromDatePickerVisibility(false)}
        style={styles.datePicker}
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
    color: '#000',
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
