import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../components/common';
import {colors} from '../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreenUser = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      setUser(JSON.parse(value));
    }
  };
  return (
    <Block flex={1} center middle color={colors.white}>
      <Text>User Home Screen</Text>
    </Block>
  );
};

export default HomeScreenUser;

const styles = StyleSheet.create({});
