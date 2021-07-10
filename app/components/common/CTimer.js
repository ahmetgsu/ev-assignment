import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {width} from '../../helpers/device';
import {formatTime} from '../../helpers/time-format';
import useTimer from '../../hooks/useTimer';
import {colors} from '../../styles/colors';
import Block from './Block';
import Text from './Text';

const CTimer = ({start, stop}) => {
  const {timer, isActive, handleStart, handleStop} = useTimer(0);

  const _handleStart = () => {
    handleStart();
    start();
  };

  const _handleStop = () => {
    handleStop();
    stop();
  };

  return (
    <Block flex={false}>
      <Block flex={false} center middle style={styles.container}>
        <Text color={colors.white} style={styles.timeText}>
          {formatTime(timer)}
        </Text>
      </Block>
      <Block flex={false} row center middle space="around" pt={15}>
        {!isActive ? (
          <TouchableOpacity onPress={_handleStart}>
            <Text size={28} color={colors.green1}>
              Start
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={_handleStop}>
            <Text size={28} color={colors.red1}>
              Stop
            </Text>
          </TouchableOpacity>
        )}
      </Block>
    </Block>
  );
};

export default CTimer;

const styles = StyleSheet.create({
  container: {
    width: width * 0.75,
    backgroundColor: colors.green1,
    borderRadius: 10,
  },
  timeText: {
    fontSize: 32,
    paddingVertical: 15,
  },
});
