import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {getCurrencySymbol} from '../../../helpers/currency';
import {colors} from '../../../styles/colors';
import {Block, Text} from '../../common';

const PriceBlock = ({
  tariff,
  title,
  finalTitle,
  initialPrice,
  discount,
  final,
}) => {
  const currency = useMemo(
    () => getCurrencySymbol(tariff?.currency),
    [tariff?.currency],
  );
  return (
    <>
      <Block flex={false} row space="between" pt={20}>
        <Text weight="300" size={18} color={colors.gray3}>
          {title}
        </Text>
        <Text weight="300" size={18} color={colors.gray3}>
          {currency} {initialPrice}
        </Text>
      </Block>
      {discount > 0 && (
        <>
          <Block flex={false} row space="between" pt={15} ph={10}>
            <Text weight="300" size={16} color={colors.gray3}>
              Discount
            </Text>
            <Text weight="300" size={16} color={colors.gray3}>
              {parseFloat(discount).toFixed(2)} %
            </Text>
          </Block>
          <Block flex={false} row space="between" pt={15}>
            <Text weight="600" size={18} color={colors.gray3}>
              {finalTitle}
            </Text>
            <Text weight="600" size={18} color={colors.green1}>
              {currency} {final.toFixed(2)}
            </Text>
          </Block>
        </>
      )}
    </>
  );
};

export default PriceBlock;

const styles = StyleSheet.create({});
