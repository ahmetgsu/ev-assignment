import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text} from '.';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FastImage from 'react-native-fast-image';
import {colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfirmationModal from './ConfirmationModal';

const statusbarHeight = getStatusBarHeight();

const CHeader = ({bgColor, title, back, right}) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => setIsVisible(prev => !prev);

  const signoutHandler = async () => {
    toggleModal();
    await AsyncStorage.removeItem('user');
    navigation.navigate('Signin');
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <Block
        flex={false}
        style={{...styles.header, backgroundColor: bgColor}}
        row>
        <Block flex={1} row center middle>
          {back && (
            <TouchableOpacity onPress={goBack}>
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
            <Icon
              name="sign-out"
              color={colors.red1}
              size={25}
              onPress={toggleModal}
            />
          )}
        </Block>
      </Block>
      <ConfirmationModal
        isVisible={isVisible}
        toggleModal={toggleModal}
        rightBtnAction={signoutHandler}
      />
    </>
  );
};

export default CHeader;

const styles = StyleSheet.create({
  header: {
    height: 60 + statusbarHeight,
    paddingTop: statusbarHeight,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.green1,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});
