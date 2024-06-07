import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;