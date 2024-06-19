import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigations/AuthStack';
import AppStack from './Navigations/AppStack';
//import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
//import { AuthContext } from './context/AuthContext';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(true);
  const [userInfo, setUserInfo] = useState({
    username: "Emmanuel",
    email:"emmanuelnyatepe35@gmail.com"
  });
  if (isLoading) {
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  }
  return (
    <NavigationContainer>
      {userToken ? <AppStack/> : <AuthStack />}
    </NavigationContainer>
  );
}