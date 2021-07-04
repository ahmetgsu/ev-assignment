import CountryDiscount from '../screens/admin/CountryDiscount';
import OperatorDiscount from '../screens/admin/OperatorDiscount';
import {colors} from '../styles/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Tab = createBottomTabNavigator();

export const AdminTabs = () => {
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
