import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Signin from '../screens/auth/Signin';
import BillingDetails from '../screens/user/BillingDetails';
import {AdminTabs} from './AdminTabs';
import {UserTabs} from './UserTabs';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="AdminTabs" component={AdminTabs} />
        <Stack.Screen name="UserTabs" component={UserTabs} />
        <Stack.Screen name="BillingDetails" component={BillingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
