import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome ,Feather} from "@expo/vector-icons";

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.txtHead}>Welcome User,</Text>
        <Text style={styles.txtSub}>
          Lorem ipsum thei ,rfurfin jhyu iuruibrkf uhd
        </Text>
      </View>
      <Text style={styles.txtHead2}>Reports</Text>
      <Text style={styles.txtSub2}>
        Lorem ipsum thei ,rfurfin jhyu iuruibrkf uhd
      </Text>
      <TouchableOpacity style={styles.BtnAllReports}>
        <FontAwesome
          name="file-o"
          size={17}
          color="white"
          style={{ alignSelf: "left", marginLeft: "5%", marginTop: "5%" }}
        />
        <Text style={styles.BtnTxt}>All Reports</Text>
        <Feather name="arrow-right-circle" size={17} color="white" style={{marginLeft:"55%"}} />
      </TouchableOpacity>
      <Text style={styles.txtHead2}>Activity</Text>
      <Text style={styles.txtSub2}>
        Select an option to continue
      </Text>
      <TouchableOpacity style={styles.BtnAllReports}>
        <FontAwesome
          name="file-o"
          size={17}
          color="white"
          style={{ alignSelf: "left", marginLeft: "5%", marginTop: "5%" }}
        />
        <Text style={styles.BtnTxt}>Get Car Wash Details</Text>
        <Feather name="arrow-right-circle" size={17} color="white" style={{marginLeft:"34%"}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.BtnAllReports}>
        <FontAwesome
          name="file-o"
          size={17}
          color="white"
          style={{ alignSelf: "left", marginLeft: "5%", marginTop: "5%" }}
        />
        <Text style={styles.BtnTxt}>Find a Ticket or Service</Text>
        <Feather name="arrow-right-circle" size={17} color="white" style={{marginLeft:"30%"}} />
      </TouchableOpacity>
      <Text style={styles.txtHead2}>Others</Text>
      <Text style={styles.txtSub2}>
        Select an option to continue
      </Text>
      <TouchableOpacity style={styles.BtnAllReports}>
        <FontAwesome
          name="file-o"
          size={17}
          color="white"
          style={{ alignSelf: "left", marginLeft: "5%", marginTop: "5%" }}
        />
        <Text style={styles.BtnTxt}>Find a Ticket or Service</Text>
        <Feather name="arrow-right-circle" size={17} color="white" style={{marginLeft:"30%"}} />
      </TouchableOpacity>
      <View style={styles.Footer}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
alignItems:"center"
  },
  headerContainer: {
    backgroundColor: "#007B5D",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignSelf: "top",
  },
  txtHead: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
  },
  txtSub: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 13,
  },
  txtHead2: {
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 12,
    marginTop: 5,
  },
  txtSub2: {
    color: "#000",
    fontSize: 12,
    marginLeft: 13,
  },
  BtnAllReports: {
    backgroundColor: "#161829",
    width: "95%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  BtnTxt: {
    color: "#fff",
    fontSize: 15,
    textAlign:"left",
    marginLeft:"2%"
  }, 
    Footer: {
        backgroundColor: "#007B5D",
        width: "100%",
        height: 50,
        alignSelf: "bottom",
    },
});
