import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from '../screens/App/Tabs/layout';
// import Notifications from '../screens/App/Pages/Notifications';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppTabs} />
      {/* <Stack.Screen options={{headerShown:false}} name="Notification" component={Notifications}/> */}
    </Stack.Navigator>
  );
};

export default AppStack;