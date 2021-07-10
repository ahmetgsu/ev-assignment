import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Block, Text} from '../common';
import Title from '../common/Title';

import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../styles/colors';

const DiscountRate = ({decrement, increment, cb, discount, onTextChange}) => {
  return (
    <Block mt={25} flex={false}>
      <Title>Discount Rate ( % )</Title>
      <Block flex={false} row center mt={25}>
        <Icon name="minus-circle" size={25} onPress={() => decrement(cb)} />
        <TextInput
          value={`${discount.toString()}`}
          onChangeText={t => onTextChange(t)}
          selectionColor={colors.main}
          underlineColor={'transparent'}
          outlineColor={colors.main}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <Icon name="plus-circle" size={25} onPress={() => increment(cb)} />
      </Block>
    </Block>
  );
};

export default DiscountRate;

const styles = StyleSheet.create({
  textInput: {
    width: 100,
    height: 50,
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 25,
    borderColor: 'transparent',
    backgroundColor: colors.gray2,
  },
});
