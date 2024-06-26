import {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import axios from "axios";

const TicketDetails = ({ route }) => {
  const ticket = route.params.ticket;
  const ticketNumber = ticket.ticket_number;
  const end_time = ticket.end_time;
  const [reciept,setReciept] = useState({});
  const [ticketClosed, setTicketClosed] = useState(false);
  console.log(ticketNumber)
  const closeTicket = async () => {
    try {
      const response = await axios.post(
        "https://shaboshabo.wigal.com.gh/api/closeservicerequest",
        {
          ticket_number: ticketNumber,
        }
      );
      if (response.data.success) {
        alert("Ticket closed successfully");
setTicketClosed(true);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error closing ticket:", error);
    }
  };

  const getServiceReciept = async () => {
    try {
      const response = await axios.post(
        "https://shaboshabo.wigal.com.gh/api/servicerceipt",
        {
          ticket_number: ticketNumber,
        }
      );
      console.log(response.data);
      setReciept(response.data.data);
      console.log("TheReciept",reciept)
    } catch (error) {
      console.error("Error getting service reciept:", error);
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
       {!end_time && <TouchableOpacity onPress={closeTicket} style={styles.closeBtn}>
          <Text style={styles.Btntext}>Close Ticket</Text>
        </TouchableOpacity>}
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.Btntext}>Make Transaction</Text>
        </TouchableOpacity>
        {end_time && <TouchableOpacity onPress={getServiceReciept} style={styles.closeBtn}>
          <Text style={styles.Btntext}>Get Service Reciept</Text>
        </TouchableOpacity>}

        <View style={styles.recieptContainer}>
         {
         reciept && reciept.map((item,index)=>(
         <View key={index}>
         <Text>{item.car_number}</Text>
         </View>))
         }
        </View>
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
    width:"98%",
  },
  closeBtn:{
    backgroundColor: '#2328a0',
    padding: 14,
    borderRadius: 8,
    width:"98%",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    marginBottom:"5%"
  },
  Btntext:{
    color: "white",
    fontSize: 15,
  }
});
