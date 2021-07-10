import React from 'react';
import {StyleSheet} from 'react-native';
import {Block} from '../common';
import CheckBox from '../../components/common/CheckBox';
import Title from '../common/Title';

const DiscountType = ({checked, onCheckPress}) => {
  return (
    <Block mt={25} flex={false}>
      <Title>Discount Type</Title>
      <Block flex={false} row center space="between" mt={25}>
        <CheckBox
          checked={checked}
          value="perkWH"
          title="per kWh"
          callback={onCheckPress}
        />
        <CheckBox
          checked={checked}
          value="transactionFee"
          title="Transaction Fee"
          callback={onCheckPress}
        />
      </Block>
    </Block>
  );
};

export default DiscountType;

const styles = StyleSheet.create({});
