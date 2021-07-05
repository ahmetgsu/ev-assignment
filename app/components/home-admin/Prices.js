import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {getCurrencySymbol} from '../../helpers/currency';
import {colors} from '../../styles/colors';
import {Block, Text} from '../common';

const Prices = ({title, initialPrice, tariff, discount, finalTitle, final}) => {
  const currency = useMemo(
    () => getCurrencySymbol(tariff?.currency),
    [tariff?.currency],
  );
  return (
    <>
      <Block flex={false} row space={'between'} pt={5}>
        <Text size={14} color={colors.gray1}>
          {title}
        </Text>
        <Text size={14} color={colors.gray1}>
          {currency} {initialPrice}
        </Text>
      </Block>
      <Block>
        {discount > 0 && (
          <>
            <Block row space={'between'} pv={5} ph={15}>
              <Text size={12} color={colors.gray1}>
                Discount rate
              </Text>
              <Text size={12} color={colors.gray1}>
                {parseFloat(discount).toFixed(2)} {'%'}
              </Text>
            </Block>
            <Block row space={'between'} pv={5} ph={15}>
              <Text size={12} color={colors.gray1}>
                {finalTitle}
              </Text>
              <Text size={12} color={colors.gray1}>
                {currency} {final.toFixed(2)}
              </Text>
            </Block>
          </>
        )}
      </Block>
    </>
  );
};

export default Prices;

const styles = StyleSheet.create({});
