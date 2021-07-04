import React from 'react';
import {colors} from '../../styles/colors';
import {Block, Text} from '../common';
import PriceBlock from './PriceBlock';

const PricingDetails = ({tariff}) => {
  return (
    <Block flex={false} pt={20} pb={20}>
      <Text size={20} color={colors.gray3} weight="300">
        Pricing details:
      </Text>
      <PriceBlock
        tariff={tariff}
        title="Volume (/kWh)"
        finalTitle="Fee after discount"
        discount={tariff?.discount_transactionFee}
        final={tariff?.final_transactionFee}
      />
      <PriceBlock
        tariff={tariff}
        title="Transaction Fee"
        finalTitle="Final Price"
        discount={tariff?.discount_perkWH}
        final={tariff?.final_perkWH}
      />
    </Block>
  );
};

export default PricingDetails;
