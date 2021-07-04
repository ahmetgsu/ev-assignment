import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Block, CHeader, Text} from '../../components/common';
import {colors} from '../../styles/colors';
import SessionTracker from '../../components/user/SessionTracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Operator from '../../components/user/Operator';
import PricingDetails from '../../components/user/PricingDetails';
import {Divider} from 'react-native-paper';
import moment from 'moment';

let currentTime;

const Session = () => {
  const [totalDuration, setTotalDuration] = useState(9000);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [startTime, setStartTime] = useState();
  console.log('Session -> startTime', startTime);
  const [endtTime, setEndTime] = useState();
  console.log('Session -> endtTime', endtTime);
  const [chargepoint, setChargePoint] = useState();

  useEffect(() => {
    getRelatedChargePoint();
  }, []);

  const getRelatedChargePoint = async () => {
    const data = await AsyncStorage.getItem('chargepoints');
    if (data != null) {
      const parsedData = JSON.parse(data);
      const relatedCP = parsedData.find(
        e => e.operator === 'LastMileSolutions',
      );
      setChargePoint(relatedCP);
    }
  };

  const getFormattedTime = time => {
    console.log('Session -> time', time);
    currentTime = time;
  };

  const toggleStopwatch = () => setStopwatchStart(prev => !prev);

  const startSession = () => {
    setStartTime(moment());
    toggleStopwatch();
  };
  const stopSession = () => {
    setEndTime(moment());
    toggleStopwatch();
  };
  return (
    <Block flex={1} color={colors.white}>
      <CHeader title="Charging Session" right />
      <ScrollView style={styles.scrollview}>
        <Operator chargepoint={chargepoint} />
        <Divider theme={{color: colors.green1}} />
        <PricingDetails tariff={chargepoint?.tariff} />
        <Divider theme={{color: colors.green1}} />
        <Block flex={false} pb={20} pt={20}>
          <Text size={20}>Billing Information</Text>
        </Block>
      </ScrollView>
      <SessionTracker
        stopwatchStart={stopwatchStart}
        stopwatchReset={stopwatchReset}
        getFormattedTime={getFormattedTime}
        // toggleStopwatch={toggleStopwatch}
        start={startSession}
        stop={stopSession}
      />
    </Block>
  );
};

export default Session;

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  divider: {
    color: colors.green1,
  },
});
