import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Block, CHeader, Text} from '../../components/common';
import {colors} from '../../styles/colors';
import MapView, {Marker} from 'react-native-maps';
import {height} from '../../helpers/device';
import CardRowText from '../../components/common/CardRowText';
import {Divider} from 'react-native-paper';
import moment from 'moment';

const BillingDetails = () => {
  const route = useRoute();
  const {item} = route.params;
  console.log('BillingDetails -> item', item);
  return (
    <Block flex={1} color={colors.white}>
      <CHeader title={'Billing Details'} back />
      <Block flex={1}>
        <MapView
          initialRegion={{
            latitude: 52.361911,
            longitude: 4.897338,
            latitudeDelta: 0.022,
            longitudeDelta: 0.021,
          }}
          style={{height: height * 0.35}}
          minZoomLevel={4}
          maxZoomLevel={15}>
          <Marker coordinate={{latitude: 52.361911, longitude: 4.897338}} />
        </MapView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollview}
          contentContainerStyle={styles.content}>
          <Block flex={false} ph={10} pt={15}>
            <Block ph={15} flex={false}>
              <Text size={20} color={colors.gray1} weight="600">
                Details:{' '}
              </Text>
            </Block>
            <CardRowText
              title="Opertor"
              value={item.operator}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
            />
            <CardRowText
              title="Country"
              value={item.country}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
              size={16}
            />
            <Divider
              theme={{color: colors.green1}}
              style={{marginVertical: 15}}
            />
          </Block>
          <Block flex={false} ph={10} pt={0}>
            <Block ph={15} flex={false}>
              <Text size={20} color={colors.gray1} weight="600">
                Charge Details:{' '}
              </Text>
            </Block>
            <CardRowText
              title="Date"
              value={moment(item.endTime).format('LL')}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
            />
            <CardRowText
              title="Start Time"
              value={moment(item.startTime).format('LTS')}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
              size={16}
            />
            <CardRowText
              title="End Time"
              value={moment(item.endTime).format('LTS')}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
              size={16}
            />
            <CardRowText
              title="Duration (mins)"
              value={item.chargeDuration}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
              size={16}
            />
            <Divider
              theme={{color: colors.green1}}
              style={{marginVertical: 15}}
            />
          </Block>
          <Block flex={false} ph={10} pt={0}>
            <Block ph={15} flex={false}>
              <Text size={20} color={colors.gray1} weight="600">
                Billing Details:{' '}
              </Text>
            </Block>
            <CardRowText
              title="Energy Consumed"
              value={item.energyConsumed}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
            />
            <CardRowText
              title="Total before discount"
              value={item.totalBeforeDiscount}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
              size={16}
            />
            <CardRowText
              title="Discount"
              value={item.discount}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
              size={16}
            />
            <CardRowText
              title="Total paid"
              value={item.totalToPay}
              color={colors.gray3}
              weight="400"
              color2={colors.green1}
              pt={10}
              size={16}
            />
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default BillingDetails;

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  content: {
    paddingBottom: 80,
  },
});
