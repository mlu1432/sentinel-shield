// src/MyStack.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import DashboardScreen from './screens/DashboardScreen';
import EmergencyContactScreen from './screens/EmergencyContactScreen';
import EmergencyCommunicationScreen from './screens/EmergencyCommunicationScreen';
import LocationSharingScreen from './screens/LocationSharingScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name="LOGIN" component={AuthScreen} initialParams={{ isSignIn: true }} />
      <Stack.Screen name="SIGNUP" component={AuthScreen} initialParams={{ isSignIn: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="EmergencyContact" component={EmergencyContactScreen} />
      <Stack.Screen name="EmergencyCommunication" component={EmergencyCommunicationScreen} />
      <Stack.Screen name="LocationSharing" component={LocationSharingScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;