import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Block, CHeader, Text} from '../../components/common';
import {colors} from '../../styles/colors';
import SessionTracker from '../../components/user/session/SessionTracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Operator from '../../components/user/session/Operator';
import PricingDetails from '../../components/user/session/PricingDetails';
import {Divider} from 'react-native-paper';
import moment from 'moment';
import BillingInfo from '../../components/user/session/BillingInfo';
import {
  calculateDiscount,
  calculateEnergyConsumed,
  calculateTotalBeforeDiscount,
} from '../../helpers/billing-details';
import {useIsFocused} from '@react-navigation/native';

let currentTime;

const Session = () => {
  const isFocused = useIsFocused();
  const [duration, setDuration] = useState();
  const [energyConsumed, setEnergyConsumed] = useState();
  const [totalBeforeDiscount, setTotalBeforeDiscount] = useState();
  const [totalDiscount, setTotalDiscount] = useState();
  const [totalToPay, setTotalToPay] = useState();
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [startTime, setStartTime] = useState();
  console.log('Session -> startTime', startTime);
  const [endTime, setEndTime] = useState();
  console.log('Session -> endTime', endTime);
  const [chargepoint, setChargePoint] = useState();
  const [chargeHistory, setChargeHistory] = useState([]);
  console.log('Session -> chargeHistory', chargeHistory);

  useEffect(() => {
    if (isFocused) {
      getRelatedChargePoint();
      getUserChargeHistory();
    }
  }, [isFocused]);

  useEffect(() => {
    endTime && calculateBillingDetails();
  }, [endTime]);

  useEffect(() => {
    isFocused && setInitialStates();
  }, [isFocused]);

  const setInitialStates = () => {
    setEnergyConsumed();
    setTotalBeforeDiscount();
    setTotalDiscount();
    setTotalToPay();
    setDuration();
  };

  const getRelatedChargePoint = async () => {
    const data = await AsyncStorage.getItem('chargepoints');
    if (data != null) {
      const parsedData = JSON.parse(data);
      const relatedCP = parsedData.find(e => e.chargepointId === 6);
      setChargePoint(relatedCP);
    }
  };
  const getUserChargeHistory = async () => {
    const data = await AsyncStorage.getItem('charge-history');
    if (data != null) {
      const parsedData = JSON.parse(data);
      setChargeHistory(parsedData);
    }
  };

  const toggleStopwatch = () => {
    setStopwatchStart(prev => !prev);
  };

  const startSession = () => {
    setStartTime(moment().format());
    toggleStopwatch();
    setStopwatchReset(false);
  };
  const stopSession = () => {
    setEndTime(moment().format());
    toggleStopwatch();
    setStopwatchReset(true);
  };

  const calculateBillingDetails = () => {
    const duration_ =
      moment(endTime).format('ss') - moment(startTime).format('ss');
    setDuration(duration_);
    const {energy} = calculateEnergyConsumed(duration_, chargepoint.maxPower);
    const {beforeDiscountTotal} = calculateTotalBeforeDiscount(
      energy,
      chargepoint.tariff,
    );
    const {combinedDiscount} = calculateDiscount(energy, chargepoint.tariff);
    setTotalDiscount(combinedDiscount);
    setEnergyConsumed(energy);
    setTotalBeforeDiscount(beforeDiscountTotal);
    const finalToPay = +(beforeDiscountTotal - combinedDiscount).toFixed(2);
    setTotalToPay(finalToPay);
    const newDataToStore = {
      startTime: startTime,
      endTime: endTime,
      operator: chargepoint.operator,
      country: chargepoint.country,
      energyConsumed: energy,
      chargeDuration: duration_,
      totalBeforeDiscount: beforeDiscountTotal,
      discount: combinedDiscount,
      totalToPay: finalToPay,
    };
    const finalDataToStore = [newDataToStore, ...chargeHistory];
    console.log(
      'calculateBillingDetails -> finalDataToStore',
      finalDataToStore,
    );

    AsyncStorage.setItem('charge-history', JSON.stringify(finalDataToStore));
    setStartTime();
    setEndTime();
  };

  return (
    <Block flex={1} color={colors.white}>
      <CHeader title="Charging Session" right />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
        contentContainerStyle={styles.content}>
        <Operator chargepoint={chargepoint} />
        <Divider theme={{color: colors.green1}} />
        <PricingDetails tariff={chargepoint?.tariff} />
        <Divider theme={{color: colors.green1}} />
        <BillingInfo
          maxPower={chargepoint?.maxPower}
          duration={duration}
          energyConsumed={energyConsumed}
          totalBeforeDiscount={totalBeforeDiscount}
          totalDiscount={totalDiscount}
          totalToPay={totalToPay}
        />
      </ScrollView>
      <SessionTracker
        stopwatchStart={stopwatchStart}
        stopwatchReset={stopwatchReset}
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
  content: {
    paddingBottom: 25,
  },
  divider: {
    color: colors.green1,
  },
});
