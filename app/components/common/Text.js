import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../styles/colors';

export default ({
  size,
  transform,
  regular,
  weight,
  center,
  right,
  left,
  justify,
  spacing,
  height,
  color,
  style,
  children,
  ...props
}) => {
  const textStyles = [
    styles.normal,
    size && {fontSize: size},
    transform && {textTransform: transform},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    center && styles.center,
    right && styles.right,
    left && styles.left,
    color && {color: color},
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  normal: {
    // fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    color: colors.black,
  },
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  left: {textAlign: 'left'},
  justify: {textAlign: 'justify'},
});
