import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Signin from '../screens/Signin';
import UserHome from '../screens/HomeScreenUser';
import {colors} from '../styles/colors';
import CountryDiscount from '../screens/admin/CountryDiscount';
import OperatorDiscount from '../screens/admin/OperatorDiscount';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="AdminTabs" component={AdminTabs} />
        <Stack.Screen name="UserHome" component={UserHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AdminTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 14},
        activeTintColor: colors.main,
      }}>
      <Tab.Screen
        name="Country"
        component={CountryDiscount}
        options={{
          tabBarIcon: ({color}) => <Icon name="flag" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Operator"
        component={OperatorDiscount}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="battery-charging" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
