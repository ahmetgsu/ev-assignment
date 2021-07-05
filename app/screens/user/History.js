import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {StyleSheet, FlatList} from 'react-native';
import {Block, CHeader, Text} from '../../components/common';
import {colors} from '../../styles/colors';
import HistoryCard from '../../components/user/history/HistoryCard';
import EmptyList from '../../components/user/history/EmptyList';

const History = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [chargeHistory, setChargeHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('History -> chargeHistory', chargeHistory);

  useEffect(() => {
    isFocused && getUserChargeHistory();
  }, [isFocused]);

  const getUserChargeHistory = async () => {
    const data = await AsyncStorage.getItem('charge-history');
    if (data != null) {
      const parsedData = JSON.parse(data);
      console.log('History -> parsedData', parsedData);
      setChargeHistory(parsedData);
    }
    setLoading(false);
  };

  const onPressItem = item => {
    navigation.navigate('BillingDetails', {item});
  };

  const _renderItem = ({item, index}) => (
    <HistoryCard item={item} index={index} onPress={onPressItem} />
  );
  return (
    <Block flex={1} color={colors.white}>
      <CHeader title="Charge History" right />
      <FlatList
        data={chargeHistory}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        style={styles.flatlist}
        ListEmptyComponent={() => !loading && <EmptyList />}
      />
    </Block>
  );
};

export default History;

const styles = StyleSheet.create({
  contentStyle: {
    // paddingHorizontal: 25,
    paddingBottom: 30,
    flex: 1,
  },
  flatlist: {
    paddingBottom: 10,
    paddingTop: 20,
    paddingHorizontal: 0,
    flex: 1,
  },
});
