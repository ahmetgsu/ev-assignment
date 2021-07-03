import React from 'react';
import {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {chargepoints} from './mocks/chargepoints';
import AppStack from './navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    checkAndSetStorage();
  }, []);

  const checkAndSetStorage = async () => {
    const items = await AsyncStorage.getItem('chargepoints');
    if (items == null) {
      AsyncStorage.setItem('chargepoints', JSON.stringify(chargepoints));
    }
  };
  return (
    <PaperProvider>
      <AppStack />
    </PaperProvider>
  );
};

export default App;
