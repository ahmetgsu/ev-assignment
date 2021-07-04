import React from 'react';
import {colors} from '../../../styles/colors';
import {Block, Text} from '../../common';
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
        finalTitle="Final Price"
        initialPrice={tariff?.perkWH}
        discount={tariff?.discount_perkWH}
        final={tariff?.final_perkWH}
      />
      <PriceBlock
        tariff={tariff}
        title="Transaction Fee"
        finalTitle="Fee after discount"
        initialPrice={tariff?.transactionFee}
        discount={tariff?.discount_transactionFee}
        final={tariff?.final_transactionFee}
      />
    </Block>
  );
};

export default PricingDetails;
