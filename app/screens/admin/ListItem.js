import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../components/common';
import Prices from '../../components/home-admin/Prices';
import {colors} from '../../styles/colors';

const ListItem = ({item}) => {
  return (
    <Block flex={false} pv={15}>
      <Block flex={false} row center space={'between'}>
        <Text testID="static-text" size={16}>
          Operator:{' '}
        </Text>
        <Text
          testID="dynamic-text"
          size={16}
          weight="bold"
          color={colors.green1}>
          {item.operator}
        </Text>
      </Block>
      <Block flex={false} row center mt={15}>
        <Text size={16}>Pricing details</Text>
      </Block>

      <Prices
        title="Volume (/kWh)"
        initialPrice={item.tariff.perkWH}
        tariff={item.tariff}
        discount={item.tariff?.discount_perkWH}
        finalTitle="Final price"
        final={item.tariff?.final_perkWH}
      />
      <Prices
        title="Transaction Fee"
        initialPrice={item.tariff.transactionFee}
        tariff={item.tariff}
        discount={item.tariff?.discount_transactionFee}
        finalTitle="Final price"
        final={item.tariff?.final_transactionFee}
      />
    </Block>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
