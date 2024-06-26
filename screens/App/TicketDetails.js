import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";

const TicketDetails = ({ route }) => {
  const ticket = route.params.ticket;
  const ticketNumber = ticket.ticket_number;
  console.log(ticketNumber)
  return (
    <View style={styles.container}>
      <View style={styles.ticketContainer}>
        <Text style={styles.text}>Ticket Number: {ticket.ticket_number}</Text>
        <Text style={styles.text}>Start Time: {ticket.start_time}</Text>
        <Text style={styles.text}>Price: {ticket.price}</Text>
        <Text style={styles.text}>Car Number: {ticket.car_number}</Text>
      </View>
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.Btntext}>Close Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.Btntext}>Make Transaction</Text>
        </TouchableOpacity>
    </View>
  );
};

export default TicketDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  ticketContainer:{
    padding: 16,
    backgroundColor: '#e3e5fe',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
    width:"98%"
  },
  closeBtn:{
    backgroundColor: '#2328a0',
    padding: 14,
    borderRadius: 8,
    width:"98%",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  Btntext:{
    color: "white",
    fontSize: 18,
  }
});
