import React from 'react';
import {StyleSheet} from 'react-native';
import Text from './Text';

const Title = ({children}) => (
  <Text size={16} weight="bold">
    {children}
  </Text>
);

export default Title;
