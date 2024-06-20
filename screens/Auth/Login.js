import { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          Welcome back kindly sign in to access {"\n"}your account.
        </Text>
      </View>
      <View style={styles.formContainer}>
<Text style={{textAlign:"left",marginLeft:"8%",marginTop:"3%",marginBottom:"3%"}}>Email</Text>        
        <View style={styles.inputGroup}>
          <TextInput
            value={email}
            placeholder="Enter username"
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>
        <Text style={{textAlign:"left",marginLeft:"8%",marginTop:"3%",marginBottom:"3%"}}>Password</Text>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.loginGroup}>
        <TouchableOpacity
          style={styles.registerBtn}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logoContainer: {
    width: "75%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    gap: "0.3%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:"10%"
  },
  logoText: {
    textAlign: "center",
    width: "95%",
    color: "#6E6D7A",
  },
  formContainer: {
    width: "100%",
    height: "25%",
    marginTop: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  inputGroup: {
    backgroundColor: "#ECECEC",
    width: "85%",
    height: "33%",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  sideIcon: {
    marginLeft: "4%",
  },
  registerBtn: {
    width: "100%",
    height: "30%",
    backgroundColor: "#1C3530",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
    fontSize: 18,
    marginLeft: "2%",
  },
  loginGroup: {
    position: "absolute",
    width: "90%",
    marginBottom: 0,
    top: "70%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  resetPwd: {
    color: "#6E6D7A",
    textAlign: "center",
  },
});

export default Login;
