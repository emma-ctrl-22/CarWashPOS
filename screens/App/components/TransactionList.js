// TransactionsList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TransactionItem from './TransactionItem';
import transactionsData from './transactions.json';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a local JSON file
    setTransactions(transactionsData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Last transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: '100%',
    height:"30%"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color:"#373dd1",marginLeft:"2%"
  },
});

export default TransactionsList;
