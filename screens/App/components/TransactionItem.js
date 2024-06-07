import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TransactionItem = ({ transaction }) => {
  const icon = transaction.success ? "check-square" : "times-circle";
  const iconColor = transaction.success ? "green" : "red";

  return (
    <View style={styles.transactionItem}>
      <FontAwesome name={icon} size={24} color={iconColor} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionText}>{transaction.description}</Text>
        <Text style={styles.transactionSubText}>{transaction.method}</Text>
      </View>
      <Text style={styles.transactionAmount}>€{transaction.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 16,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSubText: {
    fontSize: 14,
    color: '#6b6b6b',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionItem;
