import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const TicketDetails = ({ route }) => {
  const ticket = route.params.ticket;
  const ticketNumber = ticket.ticket_number;
  const end_time = ticket.end_time;
  const [receipt, setReceipt] = useState(null); // Set initial state to null
  const [ticketClosed, setTicketClosed] = useState(false);

  const navigation = useNavigation();

  console.log(ticketNumber);

  const closeTicket = async () => {
    try {
      const response = await axios.post(
        "https://shaboshabo.wigal.com.gh/api/closeservicerequest",
        {
          ticket_number: ticketNumber,
        }
      );
      console.log(response);
      if (response.data.success) {
        Alert.alert(
          "Success",
          "Ticket closed successfully",
          [
            {
              text: "OK",
              onPress: () => {
                setTicketClosed(true);
                navigation.goBack();
              }
            }
          ]
        );
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error closing ticket:", error);
    }
  };

  if (ticketClosed){
    navigation.goBack();
  }

  const getServiceReceipt = async () => {
    console.log("Getting Ticket Receipt");
    try {
      const response = await axios.post(
        "https://shaboshabo.wigal.com.gh/api/servicerceipt",
        {
          ticket_number: ticketNumber,
        }
      );
      console.log(response.data);
      setReceipt(response.data.message); // Update state with the receipt data
      console.log("TheReceipt", receipt);
    } catch (error) {
      console.error("Error getting service receipt:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ticketContainer}>
        <Text style={styles.text}>Ticket Number: {ticket.ticket_number}</Text>
        <Text style={styles.text}>Start Time: {ticket.start_time}</Text>
        <Text style={styles.text}>Price: {ticket.price}</Text>
        <Text style={styles.text}>Car Number: {ticket.car_number}</Text>
      </View>
      {!end_time && (
        <TouchableOpacity onPress={closeTicket} style={styles.closeBtn}>
          <Text style={styles.Btntext}>Close Ticket</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.closeBtn}>
        <Text style={styles.Btntext}>Make Transaction</Text>
      </TouchableOpacity>
      {end_time && (
        <TouchableOpacity onPress={getServiceReceipt} style={styles.closeBtn}>
          <Text style={styles.Btntext}>Get Service Receipt</Text>
        </TouchableOpacity>
      )}
      {receipt && (
        <View style={styles.receiptContainer}>
          <Text style={styles.receiptText}>Car Number: {receipt.car_number}</Text>
          <Text style={styles.receiptText}>Duration: {receipt.duration}</Text>
          <Text style={styles.receiptText}>ID: {receipt.id}</Text>
          <Text style={styles.receiptText}>Item Serviced: {receipt["item serviced"]}</Text>
          <Text style={styles.receiptText}>Price: {receipt.price}</Text>
          <Text style={styles.receiptText}>Service: {receipt.service}</Text>
          <Text style={styles.receiptText}>Service Date: {receipt.service_date}</Text>
          <Text style={styles.receiptText}>Staff Name: {receipt.staff_name}</Text>
          <Text style={styles.receiptText}>Start Time: {receipt.start_time}</Text>
          <Text style={styles.receiptText}>Ticket Number: {receipt.ticket_number}</Text>
        </View>
      )}
      {receipt && (
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.Btntext}>Print Receipt</Text>
        </TouchableOpacity>
      )}
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
  ticketContainer: {
    padding: 16,
    backgroundColor: '#e3e5fe',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
    width: "98%",
  },
  closeBtn: {
    backgroundColor: '#2328a0',
    padding: 14,
    borderRadius: 8,
    width: "98%",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    marginBottom: "5%",
  },
  Btntext: {
    color: "white",
    fontSize: 15,
  },
  receiptContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginTop: 20,
    width: "98%",
    alignItems: "center",
  },
  receiptText: {
    fontSize: 16,
    color: '#333',
  },
});
