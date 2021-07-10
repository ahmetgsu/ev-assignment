import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Text from './Text';
import {colors} from '../../styles/colors';
import {android} from '../../helpers/device';

const CustomCheckBox = ({checked, value, title, callback}) => {
  return (
    <TouchableOpacity onPress={() => callback(value)} style={styles.touchable}>
      <CheckBox
        disabled={false}
        onTintColor={colors.main}
        lineWidth={1.5}
        onCheckColor={colors.main}
        value={checked.includes(value)}
        onValueChange={() => android && callback(value)}
        tintColors={{true: colors.main}}
      />
      <Text size={18} style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    marginLeft: 15,
  },
});
