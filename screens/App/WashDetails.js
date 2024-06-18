import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function WashDetails() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedCarType, setSelectedCarType] = useState('');
  const [selectedCarTypeId, setSelectedCarTypeId] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [services, setServices] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://shaboshabo.wigal.com.gh/api/services');
        if (response.data.status === 0) {
          setServices(response.data.message);
        } else {
          Alert.alert('Error', 'Failed to fetch services');
        }
      } catch (error) {
        Alert.alert('Error', 'An error occurred while fetching services');
      } finally {
        setLoading(false);
      }
    };

    const fetchCarTypes = async () => {
      try {
        const response = await axios.get('https://shaboshabo.wigal.com.gh/api/serviceitems');
        if (response.data.status === 0) {
          setCarTypes(response.data.message);
        } else {
          Alert.alert('Error', 'Failed to fetch car types');
        }
      } catch (error) {
        Alert.alert('Error', 'An error occurred while fetching car types');
      } finally {
        setLoading(false);
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
  console.log(selectedCarTypeId,selectedServiceId)
    try {
      const response = await axios.post('https://shaboshabo.wigal.com.gh/api/price', {
        itemid: selectedCarTypeId,
        servicetypeid: selectedServiceId
      });
      console.log(response.data)

      if (response.data.status === 0) {
        const price = response.data.message;

        const ticket = {
          ticketId,
          startTime,
          carNumber,
          selectedService,
          selectedServiceId,
          selectedCarType,
          selectedCarTypeId,
          price
        };

        navigation.navigate('GenerateTicket', { ticket });
      } else {
        Alert.alert('Error', 'Failed to fetch price');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching price', [
        { text: 'Retry', onPress: handleTicket },
        { text: 'Cancel', style: 'cancel' }
      ]);
    }
  };

  const showServiceAlert = () => {
    Alert.alert(
      'Select Service',
      '',
      services.map(service => ({
        text: service.service,
        onPress: () => {
          setSelectedService(service.service);
          setSelectedServiceId(service.id);
        },
      })),
      { cancelable: true }
    );
  };

  const showCarTypeAlert = () => {
    Alert.alert(
      'Select Car Type',
      '',
      carTypes.map(carType => ({
        text: carType.item_name,
        onPress: () => {
          setSelectedCarType(carType.item_name);
          setSelectedCarTypeId(carType.id);
        },
      })),
      { cancelable: true }
    );
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>Fill The Form Below</Text>
      <View style={styles.inputGroup}>
        <Text>Car Number</Text>
        <TextInput placeholder="Enter Car Number" onChangeText={(text) => setCarNumber(text)} style={styles.TextInput} />
      </View>
      <View style={styles.inputGroup}>
        <Text>Service Type</Text>
        <TouchableOpacity style={styles.selector} onPress={showServiceAlert}>
          <Text style={styles.selectorText}>{selectedService || 'Select Service'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputGroup}>
        <Text>Service Item</Text>
        <TouchableOpacity style={styles.selector} onPress={showCarTypeAlert}>
          <Text style={styles.selectorText}>{selectedCarType || 'Select Service Item'}</Text>
        </TouchableOpacity>
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
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  selector: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 5,
    height: '70%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  selectorText: {
    color: '#000',
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
