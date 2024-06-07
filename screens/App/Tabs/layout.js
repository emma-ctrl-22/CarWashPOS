import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Welcome';
import WashDetails from '../WashDetails';
import Tickets from '../Tickets';
import Payments from '../Payments';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Intro' component={Welcome}/>
      <Stack.Screen options={{headerShown:false}} name='WashDetails' component={WashDetails}/>
      <Stack.Screen options={{headerShown:false}} name='Tickets' component={Tickets}/>
      <Stack.Screen options={{headerShown:false}} name='Payments' component={Payments}/>
    </Stack.Navigator>
  );
};

export default AuthStack;