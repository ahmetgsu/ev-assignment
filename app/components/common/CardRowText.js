import React from 'react';
import {StyleSheet} from 'react-native';
import Block from './Block';
import Text from './Text';

const CardRowText = ({
  title,
  value,
  color,
  color2,
  weight,
  size = 18,
  pb = 0,
  pt = 5,
}) => {
  return (
    <Block flex={false} row space="between" pt={pt} ph={15} pb={pb}>
      <Text weight={weight} size={size} color={color}>
        {title}
      </Text>
      <Text weight={weight} size={size} color={color2 ? color2 : color}>
        {value}
      </Text>
    </Block>
  );
};

export default CardRowText;

const styles = StyleSheet.create({});
