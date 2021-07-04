import moment from 'moment';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {width} from '../../../helpers/device';
import {colors} from '../../../styles/colors';
import {Block, Text} from '../../common';
import CardRowText from '../../common/CardRowText';

const HistoryCard = ({item, index, onPress}) => {
  return (
    <Block row center middle ph={15} style={styles.cardContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.touchable}
        onPress={() => onPress(item)}>
        <Block flex={false} style={styles.card} mt={5} mb={5}>
          <CardRowText
            title={'Operator'}
            value={item.operator}
            color={colors.gray1}
            color2={colors.green1}
            weight={'300'}
          />
          <CardRowText
            title={'Duration (mins)'}
            value={item.chargeDuration}
            color={colors.gray1}
            weight={'300'}
          />
          <CardRowText
            title={'Date'}
            value={moment(item.endTime).format('LL')}
            color={colors.gray1}
            weight={'300'}
          />
          <CardRowText
            title={'Total paid'}
            value={item.totalToPay}
            color={colors.gray1}
            weight={'500'}
            pb={5}
          />
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: width,
    // backgroundColor: 'pink',
  },
  card: {
    width: width * 0.93,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray2,
    // shadowColor: colors.gray2,
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.36,
    // shadowRadius: 6.68,
    // elevation: 11,
  },
  touchable: {
    shadowColor: colors.gray1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
