import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import {Block, Text} from '../../common';
import RowText from '../../common/RowText';

const BillingInfo = ({
  duration,
  energyConsumed,
  totalBeforeDiscount,
  totalDiscount,
  totalToPay,
}) => {
  return (
    <Block flex={false} pb={20} pt={20}>
      <Text size={20}>Billing Information</Text>
      <RowText
        title="Charge duration (mins)"
        value={duration}
        color={colors.gray3}
        weight={'300'}
      />
      <RowText
        title="Energy consumed (kWh)"
        value={energyConsumed}
        color={colors.gray3}
        weight={'300'}
      />
      {totalDiscount > 0 && (
        <RowText
          title="Total before discount"
          value={totalBeforeDiscount}
          color={colors.gray3}
          weight={'300'}
        />
      )}
      {totalDiscount > 0 && (
        <RowText
          title="Discount"
          value={totalDiscount}
          color={colors.gray3}
          weight={'300'}
        />
      )}
      <RowText
        title="Total to pay"
        value={totalToPay}
        color={colors.gray3}
        weight={'600'}
      />
    </Block>
  );
};

export default BillingInfo;

const styles = StyleSheet.create({});
