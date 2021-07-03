import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text} from '.';
import {colors} from '../../styles/colors';

const ColorButton = ({text, callback, disabled}) => {
  const onPressHandler = () => {
    !disabled && callback();
  };
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.8}>
      <Block
        flex={false}
        style={[styles.buttonContainer, disabled && styles.disabled]}>
        <Block flex={1} row center middle>
          <Text weight="bold" size={18} color={colors.white}>
            {text}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ColorButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 48,
    backgroundColor: colors.main,
    borderRadius: 4,
  },
  disabled: {
    backgroundColor: colors.gray2,
  },
});
