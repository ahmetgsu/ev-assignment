import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {height, width} from '../../../helpers/device';
import {colors} from '../../../styles/colors';
import {Block, Text} from '../../common';

const EmptyList = () => {
  return (
    <Block flex={1} center middle>
      <FastImage
        source={require('../../../assets/images/empty.png')}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
      />
      <Block flex={false} pt={50}>
        <Text size={22} weight="500" color={colors.blackish}>
          You have no charging history yet
        </Text>
      </Block>
    </Block>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  image: {
    height: height * 0.4,
    aspectRatio: 1,
  },
});
