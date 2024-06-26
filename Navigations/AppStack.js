import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from '../screens/App/Tabs/layout';
import WashDetails from '../screens/App/WashDetails';
import {View,Text} from 'react-native'
import GenerateTicket from '../screens/App/GenerateTicket';
import TicketDetails from '../screens/App/TicketDetails';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppTabs} />
      <Stack.Screen options={{headerTransparent: false,
          headerTitle: () => (
            <View style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
              <Text style={{ fontSize: 20,margin:10 ,color:"white"}}>
                Get Car Wash Details
              </Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2328a0',
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 15,
            color: '#333',
          },}} name="carInput" component={WashDetails} />

      <Stack.Screen options={{headerTransparent: false,
          headerTitle: () => (
            <View style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
              <Text style={{ fontSize: 20,margin:10 ,color:"white"}}>
                Generate Ticket
              </Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2328a0',
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 15,
            color: '#333',
          },
          headerLeft: () => null,}} name="GenerateTicket" component={GenerateTicket}
           />

           <Stack.Screen options={{headerTransparent: false,
          headerTitle: () => (
            <View style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
              <Text style={{ fontSize: 20,margin:10 ,color:"white"}}>
               Ticket Details
              </Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2328a0',
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 15,
            color: '#333',
          },
          headerLeft: () => null,}} name="TicketDetails" component={TicketDetails}
           />
    </Stack.Navigator>
  );
};

export default AppStack;