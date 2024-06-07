import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from '../screens/App/Tabs/layout';
import WashDetails from '../screens/App/WashDetails';
import {View,Text} from 'react-native'
// import Notifications from '../screens/App/Pages/Notifications';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppTabs} />
      <Stack.Screen options={{headerTransparent: false,
          headerTitle: () => (
            <View style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
              <Text style={{ fontSize: 18 }}>
                Carwash
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
      {/* <Stack.Screen options={{headerShown:false}} name="Notification" component={Notifications}/> */}
    </Stack.Navigator>
  );
};

export default AppStack;