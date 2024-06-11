import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { FontAwesome, Feather, Entypo } from '@expo/vector-icons';
import ActionButton from './components/ActionButton';
import TransactionsList from './components/TransactionList';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actions}>
        <View style={styles.actionRow}>
        <ActionButton
            text="Tickets"
           value={40}
            onPress={() => console.log("Summaries pressed")}
          />
          <ActionButton
            text="Transactions"
            value={40}
            onPress={() => console.log("Items pressed")}
          />
        </View>
        <View style={styles.actionRow}>
        <ActionButton
            text="Number of Cars"
            value={40}
            onPress={() => console.log("Summaries pressed")}
          />
          <ActionButton
            text="Total Amount"
            value="$1200"
            onPress={() => console.log("Items pressed")}
          />
        </View>
      </View>
      <TransactionsList/>
      
      <TouchableOpacity style={styles.newPaymentButton} onPress={()=>navigation.navigate('carInput')}>
        <Text style={styles.newPaymentText}>Add New Ticket</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4B4ACF',
    padding: 10,
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  greeting: {
    padding: 15,
    backgroundColor: '#2328a0',
  },
  greetingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  actions: {
    padding: 10,
    backgroundColor:"#2328a0",
    width:"100%"
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    height: 100,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#6A67CE',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
  },
  transactions: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionSubText: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newPaymentButton: {
    backgroundColor: '#4B4ACF',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    width: '80%',
    height:50,
    justifyContent:"center"
  },
  newPaymentText: {
    color:"white",
    fontSize: 20,
    fontWeight: 'bold',
  }
});