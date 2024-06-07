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

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actions}>
        <View style={styles.actionRow}>
        <ActionButton
            text="Summaries"
            icon="menu"
            IconComponent={Entypo}
            onPress={() => console.log("Summaries pressed")}
          />
          <ActionButton
            text="Items"
            icon="circle"
            IconComponent={FontAwesome}
            onPress={() => console.log("Items pressed")}
          />
        </View>
        <View style={styles.actionRow}>
        <ActionButton
            text="Summaries"
            icon="menu"
            IconComponent={Entypo}
            onPress={() => console.log("Summaries pressed")}
          />
          <ActionButton
            text="Items"
            icon="circle"
            IconComponent={FontAwesome}
            onPress={() => console.log("Items pressed")}
          />
        </View>
      </View>
      <ScrollView style={styles.transactions}>
        <Text style={styles.sectionTitle}>Last transactions</Text>
        <View style={styles.transactionItem}>
          <FontAwesome name="check-square" size={24} color="green" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Payment successful</Text>
            <Text style={styles.transactionSubText}>Cash</Text>
          </View>
          <Text style={styles.transactionAmount}>€57.00</Text>
        </View>
        <View style={styles.transactionItem}>
          <FontAwesome name="times-circle" size={24} color="red" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Payment failed</Text>
            <Text style={styles.transactionSubText}>Cash</Text>
          </View>
          <Text style={styles.transactionAmount}>€78.00</Text>
        </View>
        <View style={styles.transactionItem}>
          <FontAwesome name="check-square" size={24} color="green" />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionText}>Payment successful</Text>
            <Text style={styles.transactionSubText}>Cash</Text>
          </View>
          <Text style={styles.transactionAmount}>€82.00</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.newPaymentButton}>
        <Text style={styles.newPaymentText}>New payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  newPaymentText: {
  }
});