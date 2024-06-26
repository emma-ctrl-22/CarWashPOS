import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const TicketDetails = ({route}) => {
  const ticket = route.params.ticket;
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Ticket Number: {ticket.ticket_number}</Text>
    <Text style={styles.text}>Start Time: {ticket.start_time}</Text>
    <Text style={styles.text}>Price: {ticket.price}</Text>
    <Text style={styles.text}>Car Number: {ticket.car_number}</Text>
    
  </View>
  )
}

export default TicketDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});