import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function WashDetails() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedCarType, setSelectedCarType] = useState(null);
  const [selectedCarTypeId, setSelectedCarTypeId] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [services, setServices] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [openServicePicker, setOpenServicePicker] = useState(false);
  const [openCarTypePicker, setOpenCarTypePicker] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://shaboshabo.wigal.com.gh/api/services');
        if (response.data.status === 0) {
          setServices(response.data.message.map(service => ({ label: service.service, value: service.id })));
        } else {
          Alert.alert('Error', 'Failed to fetch services');
        }
      } catch (error) {
        Alert.alert('Error', 'An error occurred while fetching services');
      }
    };

    const fetchCarTypes = async () => {
      try {
        const response = await axios.get('https://shaboshabo.wigal.com.gh/api/serviceitems');
        if (response.data.status === 0) {
          setCarTypes(response.data.message.map(carType => ({ label: carType.item_name, value: carType.id })));
        } else {
          Alert.alert('Error', 'Failed to fetch car types');
        }
      } catch (error) {
        Alert.alert('Error', 'An error occurred while fetching car types');
      }
    };

    fetchServices();
    fetchCarTypes();
  }, []);

  const generateRandomId = () => {
    return 'TID' + Math.floor(Math.random() * 1000000);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString();
  };

  const handleTicket = async () => {
    const ticketId = generateRandomId();
    const startTime = getCurrentTime();

    const ticket = {
      ticketId,
      startTime,
      carNumber,
      selectedService: services.find(service => service.value === selectedService)?.label,
      selectedServiceId,
      selectedCarType: carTypes.find(carType => carType.value === selectedCarType)?.label,
      selectedCarTypeId,
    };

    navigation.navigate('GenerateTicket', { ticket });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>Fill The Form Below</Text>
      <View style={styles.inputGroup}>
        <Text>Car Number</Text>
        <TextInput placeholder="Enter Car Number" onChangeText={(text) => setCarNumber(text)} style={styles.TextInput} />
      </View>
      <View style={styles.inputGroup}>
        <Text>Service Type</Text>
        <DropDownPicker
          open={openServicePicker}
          value={selectedService}
          items={services}
          setOpen={setOpenServicePicker}
          setValue={setSelectedService}
          setItems={setServices}
          onChangeValue={(value) => setSelectedServiceId(value)}
          placeholder="Select Service"
          style={styles.picker}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Service Item</Text>
        <DropDownPicker
          open={openCarTypePicker}
          value={selectedCarType}
          items={carTypes}
          setOpen={setOpenCarTypePicker}
          setValue={setSelectedCarType}
          setItems={setCarTypes}
          onChangeValue={(value) => setSelectedCarTypeId(value)}
          placeholder="Select Service Item"
          style={styles.picker}
        />
      </View>

      <TouchableOpacity style={styles.Btn} onPress={handleTicket}>
        <Text style={{ color: 'white' }}>Next</Text>
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
  picker: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 5,
    height: 50,
    marginTop: 5,
  },
  Btn: {
    width: '95%',
    height: 60,
    backgroundColor: '#2328a0',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '45%',
    borderRadius: 5,
  },
});
