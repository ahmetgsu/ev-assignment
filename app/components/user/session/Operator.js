import React from 'react';
import {colors} from '../../../styles/colors';

import {Block, Text} from '../../common';

const Operator = ({chargepoint}) => {
  console.log('Operator -> chargepoint', chargepoint);
  return (
    <Block flex={false} pb={20}>
      <Block space="between" flex={false} row>
        <Text size={20}>Operator</Text>
        <Text size={20} weight="bold" color={colors.green1}>
          {chargepoint?.operator}
        </Text>
      </Block>
      <Block space="between" flex={false} row pt={10}>
        <Text size={18} weight="400">
          Country
        </Text>
        <Text size={18} weight="400" color={colors.black1}>
          {chargepoint?.country}
        </Text>
      </Block>
      <Block space="between" flex={false} row pt={10}>
        <Text size={14} weight="400">
          max power
        </Text>
        <Text size={16} weight="600" color={colors.black1}>
          {chargepoint?.maxPower} kW
        </Text>
      </Block>
    </Block>
  );
};

export default Operator;
