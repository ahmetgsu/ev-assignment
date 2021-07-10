import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Block from './Block';
import Text from './Text';
import Modal from 'react-native-modal';
import {colors} from '../../styles/colors';
import {heightScr, widthScr} from '../../helpers/device';

const ConfirmationModal = ({isVisible, toggleModal, rightBtnAction}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      statusBarTranslucent
      onRequestClose={toggleModal}
      backdropColor="rgba(0,0,0,0.8)"
      useNativeDriver
      coverScreen={true}
      useNativeDriverForBackdrop
      deviceWidth={widthScr}
      deviceHeight={heightScr}
      style={styles.modal}>
      <Block flex={1} style={styles.container}>
        <Block flex={2.5}>
          <Block flex={1.5} row middle style={{alignItems: 'flex-end'}}>
            <Text weight="600" style={{fontSize: 17}}>
              Sign-out from the app?
            </Text>
          </Block>
          <Block flex={2} row middle style={styles.textBlock}>
            <Text
              center
              style={{fontSize: 13, lineHeight: 16, letterSpacing: -0.08}}>
              You will need to sign-in again to use the app
            </Text>
          </Block>
        </Block>
        <Block row flex={1} center style={styles.buttonContainer}>
          <Block flex={1}>
            <TouchableOpacity onPress={toggleModal}>
              <Block flex={false} row center middle style={styles.leftBtn}>
                <Text color={colors.disabled}>No</Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block flex={1}>
            <TouchableOpacity onPress={rightBtnAction}>
              <Block flex={false} row center middle style={styles.rightBtn}>
                <Text color={colors.red1}>Yes</Text>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderRadius: 14,
    marginTop: 224,
    height: 140,
    marginHorizontal: 72,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray2,
  },
  textBlock: {
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  leftBtn: {
    borderRightWidth: 1,
    borderColor: colors.gray2,
    height: '100%',
  },
  rightBtn: {
    height: '100%',
  },
});
