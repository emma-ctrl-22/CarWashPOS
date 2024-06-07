import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionButton = ({ text, icon, IconComponent, onPress }) => {
    return (
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        <Text style={styles.actionText}>{text}</Text>
        <IconComponent name={icon} size={24} color="white" />
      </TouchableOpacity>
    );
  };

export default ActionButton

const styles = StyleSheet.create({
    actionButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3F51B5",
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 4,
        height: '90%',
      },
      actionText: {
        color: "white",
        fontSize: 16,
      },
})