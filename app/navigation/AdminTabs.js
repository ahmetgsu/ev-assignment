import CountryDiscount from '../screens/admin/CountryDiscount';
import OperatorDiscount from '../screens/admin/OperatorDiscount';
import {colors} from '../styles/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import CTabBar from '../components/common/CTabBar';

const Tab = createBottomTabNavigator();

export const AdminTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CTabBar {...props} />}
      tabBarOptions={{
        // labelStyle: {fontSize: 14},
        activeTintColor: colors.main,
      }}>
      <Tab.Screen
        name="Country"
        component={CountryDiscount}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="font-awesome-flag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Operator"
        component={OperatorDiscount}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="battery-half" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
