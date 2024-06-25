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
      console.log('Ticket history:', response.data);

      const filteredTickets = response.data.filter(ticket => {
        const ticketDate = moment(ticket.date);
        const isWithinDateRange = ticketDate.isBetween(moment(fromDate), moment(toDate), undefined, '[]');
        const matchesSearch = search ? ticket.ticketId.toString().includes(search) : true;
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
