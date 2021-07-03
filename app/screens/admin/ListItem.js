import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../components/common';
import {colors} from '../../styles/colors';

const ListItem = ({item}) => {
  return (
    <Block flex={false} pv={15}>
      <Block row center space={'between'}>
        <Text size={16}>Operator: </Text>
        <Text size={16} weight="bold">
          {item.operator}
        </Text>
      </Block>
      <Block row center mt={15}>
        <Text size={16}>Pricing details</Text>
        <Text weight="bold" style={{marginLeft: 15}}>
          {item.tariff.currency}
        </Text>
      </Block>

      <Block row space={'between'} pt={5}>
        <Text size={14} color={colors.gray1}>
          Volume (/kWh)
        </Text>
        <Text size={14} color={colors.gray1}>
          {item.tariff.perkWH}
        </Text>
      </Block>
      <Block>
        {item.tariff?.discount_perkWH > 0 && (
          <>
            <Block row space={'between'} pv={5} ph={15}>
              <Text size={12} color={colors.gray1}>
                Discount rate
              </Text>
              <Text size={12} color={colors.gray1}>
                {item.tariff?.discount_perkWH}
              </Text>
            </Block>
            <Block row space={'between'} pv={5} ph={15}>
              <Text size={12} color={colors.gray1}>
                Final price
              </Text>
              <Text size={12} color={colors.gray1}>
                {item.tariff?.final_perkWH}
              </Text>
            </Block>
          </>
        )}
      </Block>
      <Block row space={'between'} pt={5}>
        <Text size={14} color={colors.gray1}>
          Transaction Fee
        </Text>
        <Text size={14} color={colors.gray1}>
          {item.tariff.transactionFee}
        </Text>
      </Block>
      <Block>
        {item.tariff?.discount_transactionFee > 0 && (
          <>
            <Block row space={'between'} pv={5} ph={15}>
              <Text size={12} color={colors.gray1}>
                Discount rate
              </Text>
              <Text size={12} color={colors.gray1}>
                {item.tariff?.discount_transactionFee}
              </Text>
            </Block>
            <Block row space={'between'} pv={5} ph={15}>
              <Text size={12} color={colors.gray1}>
                Final price
              </Text>
              <Text size={12} color={colors.gray1}>
                {item.tariff?.final_transactionFee}
              </Text>
            </Block>
          </>
        )}
      </Block>
    </Block>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
