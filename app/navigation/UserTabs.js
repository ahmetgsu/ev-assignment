import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Session from '../screens/user/Session';
import History from '../screens/user/History';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../styles/colors';

const Tab = createBottomTabNavigator();

export const UserTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 14},
        activeTintColor: colors.main,
      }}>
      <Tab.Screen
        name="Session"
        component={Session}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'charging-station'} color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'history'} color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
