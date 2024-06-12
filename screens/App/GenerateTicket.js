import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function GenerateTicket({ route }) {
  const { ticket } = route.params;
  const ticketNumber = ticket.ticketId
  const navigation = useNavigation();

  useEffect(() => {
    // Disable hardware back button on Android
    const backAction = () => {
      Alert.alert("Hold on!", "You can't go back from this screen.", [
        { text: "OK", onPress: () => null },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    // Disable the back button in the header
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Generated Ticket</Text>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <Text>Description</Text>
          <Text>Info</Text>
        </View>
        <View style={styles.tableContent}>
          <Text style={styles.text}>Ticket Number</Text>
          <Text style={styles.text}>{ticketNumber}</Text>
        </View>
        <View style={styles.tableContent}>
          <Text style={styles.text}>Start Time</Text>
          <Text style={styles.text}>{ticket.startTime}</Text>
        </View>
        <View style={styles.tableContent}>
          <Text style={styles.text}>Price</Text>
          <Text style={styles.text}>{ticket.price}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#2328a0",
          padding: 10,
          borderRadius: 5,
          marginTop: 40,
          width: "95%",
          height: "8%",
          alignItems:"center",
            justifyContent:"center",
            alignSelf:"center"
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Proceed To Make Payment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#2328a0",
          padding: 10,
          borderRadius: 5,
          marginTop: 40,
          width: "95%",
          height: "8%",
          alignItems:"center",
            justifyContent:"center",
            alignSelf:"center"
        }}
        onPress={() => navigation.navigate("Tickets")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Save For Later</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  headerTxt: {
    fontSize: 20,
    color: "black",
    fontWeight: "200",
  },
  table: {
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 5,
    height: "30%",
    width: "95%",
    alignSelf: "center",
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
  },
  tableHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#c0c0c0",
    height: "25%",
    backgroundColor: "dodgerblue",
  },
  tableContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#c0c0c0",
    height: "25%",
  },
  text:{
    fontSize: 18,
    marginVertical: 10,
    fontWeight:"200",margin:10
  }
});
