import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated ,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Welcome';
import Payments from '../Payments';
import Ionicons from '@expo/vector-icons/Ionicons';
import History from '../History';
import Tickets from '../Tickets';
import Profile from '../WashDetails';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            label = 'Home';
          } else if (route.name === 'History') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            label = 'History';
          } else if (route.name === 'Tickets') {
            iconName = focused ? 'ticket' : 'ticket-outline';
            label = 'Tickets';
          } else if (route.name === 'Transactions') {
            iconName = focused ? 'card' : 'card-outline';
            label = 'Transactions';
          }

          return (
            <View style={{ alignItems: 'center' }}>
              <Ionicons name={iconName} size={20} color={color} />
              <Text style={{ color, fontSize: 10 }}>{label}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {

          height: 40,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          headerTransparent: false,
          headerTitle: () => (
            <View style={{ height: "80%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
              <Text style={{ fontSize: 20 ,color:"white",fontWeight:"bold"}}>
                Carwash
              </Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2328a0',
            height: 80,
          },
          headerTitleStyle: {
            fontSize: 15,
            color: '#333',
          },
          headerRightContainerStyle: {
            marginLeft: "2%"
          }
        }}
      />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Transactions" component={Payments} />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  middleButton: {
    width: 55,
    height: 55,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppTabs;