import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {width} from '../../helpers/device';
import {colors} from '../../styles/colors';
import {Block, Text} from '../common';
import {Stopwatch} from 'react-native-stopwatch-timer';

const SessionTracker = ({
  stopwatchStart,
  stopwatchReset,
  getFormattedTime,
  start,
  stop,
}) => {
  return (
    <Block middle center flex={false} mb={20}>
      <Stopwatch
        laps
        start={stopwatchStart}
        reset={stopwatchReset}
        options={options}
        getTime={getFormattedTime}
      />
      <Block flex={false} mt={20}>
        <TouchableOpacity onPress={!stopwatchStart ? start : stop}>
          <Text
            size={30}
            color={!stopwatchStart ? colors.green1 : colors.red1}
            style={styles.text}>
            {!stopwatchStart ? 'Start' : 'Stop'}
          </Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default SessionTracker;

const styles = StyleSheet.create({
  text: {
    letterSpacing: 3,
  },
});

const options = {
  container: {
    backgroundColor: colors.green1,
    padding: 15,
    borderRadius: 5,
    width: width - 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: '#FFF',
    // marginLeft: 7,
    letterSpacing: 2,
  },
};
