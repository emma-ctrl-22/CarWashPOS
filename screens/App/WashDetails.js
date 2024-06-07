import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput ,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function WashDetails() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedCarType, setSelectedCarType] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const navigation = useNavigation();

  const handleTicket = () => {
    navigation.navigate('GenerateTicket', {
      carNumber: carNumber,
      selectedService: selectedService,
      selectedCarType: selectedCarType,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>Fill The Form Below</Text>
      <View style={styles.inputGroup}>
        <Text>Car Number</Text>
        <TextInput placeholder="Enter Car Number" onChangeText={(text)=>setCarNumber(text)} style={styles.TextInput} />
      </View>
      <View style={styles.inputGroup}>
        <Text>Service Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedService}
            onValueChange={(itemValue) => setSelectedService(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Service" value="" />
            <Picker.Item label="Wash" value="wash" />
            <Picker.Item label="Wax" value="wax" />
            <Picker.Item label="Interior Cleaning" value="interior_cleaning" />
          </Picker>
        </View>
      </View>
      <View style={styles.inputGroup}>
        <Text>Car Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCarType}
            onValueChange={(itemValue) => setSelectedCarType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Car Type" value="" />
            <Picker.Item label="Sedan" value="sedan" />
            <Picker.Item label="SUV" value="suv" />
            <Picker.Item label="Hatchback" value="hatchback" />
            <Picker.Item label="Convertible" value="convertible" />
            <Picker.Item label="Coupe" value="coupe" />
            <Picker.Item label="Wagon" value="wagon" />
            <Picker.Item label="Minivan" value="minivan" />
            <Picker.Item label="Pickup Truck" value="pickup_truck" />
            <Picker.Item label="Sports Car" value="sports_car" />
            <Picker.Item label="Electric Car" value="electric_car" />
            <Picker.Item label="Hybrid Car" value="hybrid_car" />
            <Picker.Item label="Luxury Car" value="luxury_car" />
            <Picker.Item label="Compact Car" value="compact_car" />
            <Picker.Item label="Crossover" value="crossover" />
            <Picker.Item label="Off-Road Vehicle" value="off_road_vehicle" />
            <Picker.Item label="Van" value="van" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity style={styles.Btn} onPress={handleTicket}>
        <Text style={{color:"white"}}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTxt: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 15,
    marginLeft: '4%',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    height: '13%',
    justifyContent: 'space-between',
    width: '93%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 5,
    height: '70%',
    paddingHorizontal: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 5,
    height: '70%',
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  Btn:{
    width:"95%",
    height:60,
    backgroundColor:"#2328a0",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    marginTop:"5%",
    borderRadius:5
  }
});
