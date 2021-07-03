import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text} from '.';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FastImage from 'react-native-fast-image';
import {colors} from '../../styles/colors';

const statusbarHeight = getStatusBarHeight();

const CHeader = ({bgColor, title, back, right}) => {
  return (
    <Block
      flex={false}
      style={{...styles.header, backgroundColor: bgColor}}
      row>
      <Block flex={1} row center middle>
        {back && (
          <TouchableOpacity>
            <FastImage
              source={require('../../assets/icons/left-chevron.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
      </Block>
      <Block flex={3} row center middle>
        <Text size={20} weight="bold">
          {title}
        </Text>
      </Block>
      <Block flex={1} row center middle>
        {right && (
          <TouchableOpacity>
            <Text>middle</Text>
          </TouchableOpacity>
        )}
      </Block>
    </Block>
  );
};

export default CHeader;

const styles = StyleSheet.create({
  header: {
    height: 60 + statusbarHeight,
    paddingTop: statusbarHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});
