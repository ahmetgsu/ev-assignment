import React from 'react';
import {StyleSheet} from 'react-native';
import Block from './Block';
import Text from './Text';

const RowText = ({title, value, color, weight, size = 18}) => {
  return (
    <Block flex={false} row space="between" pt={20}>
      <Text weight={weight} size={size} color={color}>
        {title}
      </Text>
      <Text weight={weight} size={size} color={color}>
        {value}
      </Text>
    </Block>
  );
};

export default RowText;

const styles = StyleSheet.create({});
