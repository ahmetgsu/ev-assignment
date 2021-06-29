import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from './styles/colors';
import Logo from './assets/images/logo.svg';
import {CHeader, Block} from './components/common';

const App = () => {
  return (
    <Block flex={1} style={styles.container}>
      <CHeader />
      <Block flex={1}>
        <Text>EV Assignment</Text>
        <Logo height={35} width={186} />
      </Block>
    </Block>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main,
  },
});
