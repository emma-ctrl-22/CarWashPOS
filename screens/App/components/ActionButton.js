import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionButton = ({ text, value, onPress }) => {
    return (
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        <Text style={styles.actionText}>{text}</Text>
        <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>{value}</Text>
      </TouchableOpacity>
    );
  };

export default ActionButton

const styles = StyleSheet.create({
    actionButton: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#373dd1",
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 4,
        height: '90%',
      },
      actionText: {
        color: "white",
        fontSize: 16,
        fontWeight:"200"
      },
})