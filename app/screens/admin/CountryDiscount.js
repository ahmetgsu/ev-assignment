import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, FlatList} from 'react-native';
import {Block, CHeader, ColorButton, Text} from '../../components/common';
import {colors} from '../../styles/colors';
import CountrySelect from '../../components/home-admin/CountrySelect';
import Title from '../../components/common/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '../../components/common/CheckBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Divider} from 'react-native-paper';
import ListItem from './ListItem';

const CountryDiscount = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [relatedChargePoints, setRelatedChargePoints] = useState([]);
  console.log('CountryDiscount -> relatedChargePoints', relatedChargePoints);
  const [unrelatedChargePoints, setUnrelatedChargePoints] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [checked, setChecked] = useState([]);
  const [chargepoints, setChargepoints] = useState([]);

  useEffect(() => {
    getData();
  }, [JSON.stringify(chargepoints)]);

  useEffect(() => {
    let relatedCPs = [];
    let unrelatedCPs = [];
    selectedCountries.forEach(sc => {
      let relatedCP = chargepoints.filter(e => e.country === sc);
      relatedCPs = [...relatedCPs, ...relatedCP];
      if (unrelatedCPs.length === 0) {
        unrelatedCPs = chargepoints.filter(e => e.country !== sc);
      } else {
        unrelatedCPs = unrelatedCPs.filter(e => e.country !== sc);
      }
    });
    setRelatedChargePoints(relatedCPs);
    setUnrelatedChargePoints(unrelatedCPs);
  }, [JSON.stringify(selectedCountries)]);

  const getData = async () => {
    const cPoints = await AsyncStorage.getItem('chargepoints');
    if (cPoints != null) {
      const parsedCPoints = JSON.parse(cPoints);
      console.log('Signin -> cPoints', parsedCPoints);
      setChargepoints(parsedCPoints);
      let countriesArr = [];
      parsedCPoints.forEach(cp => {
        const isExist = countriesArr.find(e => e.name === cp.country);
        if (!isExist) {
          countriesArr = [
            ...countriesArr,
            {
              name: cp.country,
              id: cp.country,
            },
          ];
        }
        setCountries(countriesArr);
      });
    }
  };

  const onSelectedItemsChange = selectedItems => {
    setSelectedCountries(selectedItems);
  };

  const increment = () => setDiscount(prev => (+prev > 95 ? 100 : +prev + 5));
  const decrement = () =>
    setDiscount(prev => (+prev < 5 ? +prev - +prev : +prev - 5));

  const onCheckPress = txt => {
    checked.includes(txt) ? removeFromList(txt) : addToList(txt);
  };

  const addToList = txt => {
    const newArr = [...checked, txt];
    setChecked(newArr);
  };
  const removeFromList = txt => {
    const newArr = checked.filter(e => e !== txt);
    setChecked(newArr);
  };

  const onChangeNumber = t => {};

  const applyDiscount = async () => {
    let newRCP = [...relatedChargePoints];
    checked.forEach(e => {
      const newPropDiscount = `discount_${e}`;
      const newPropNewPrice = `final_${e}`;
      newRCP.forEach(cp => {
        cp.tariff[newPropDiscount] = discount;
        let newPrice = cp.tariff[e] * (1 - discount / 100);
        cp.tariff[newPropNewPrice] = +newPrice.toFixed(2);
      });
    });
    const newArray = [...unrelatedChargePoints, ...newRCP];
    AsyncStorage.setItem('chargepoints', JSON.stringify(newArray));
    setChargepoints(newArray);
  };

  const _renderItem = ({item, index}) => <ListItem item={item} key={index} />;

  return (
    <Block flex={1} color={colors.white}>
      <CHeader title="Admin Panel" />
      <FlatList
        data={relatedChargePoints}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
            <CountrySelect
              countries={countries}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedCountries={selectedCountries}
            />
            <Block mt={25} flex={false}>
              <Title>Discount Rate ( % )</Title>
              <Block flex={false} row center mt={25}>
                <Icon name="minus-circle" size={25} onPress={decrement} />
                <TextInput
                  value={`${discount.toString()}`}
                  onChangeText={t => onChangeNumber(t)}
                  selectionColor={colors.main}
                  underlineColor={'transparent'}
                  outlineColor={colors.main}
                  style={styles.textInput}
                  keyboardType="numeric"
                />
                <Icon name="plus-circle" size={25} onPress={increment} />
              </Block>
            </Block>
            <Block mt={25} flex={false}>
              <Title>Discount Type</Title>
              <Block flex={false} row center space="between" mt={25}>
                <CheckBox
                  checked={checked}
                  value="perkWH"
                  title="per kWh"
                  callback={onCheckPress}
                />
                <CheckBox
                  checked={checked}
                  value="transactionFee"
                  title="Transaction Fee"
                  callback={onCheckPress}
                />
              </Block>
            </Block>
          </>
        }
        ItemSeparatorComponent={() => <Divider />}
      />
      <Block style={styles.button}>
        <ColorButton
          text="Apply"
          callback={applyDiscount}
          disabled={selectedCountries.length === 0 || checked.length === 0}
        />
      </Block>
    </Block>
  );
};

export default CountryDiscount;

const styles = StyleSheet.create({
  textInput: {
    width: 100,
    height: 50,
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 25,
    borderColor: 'transparent',
    backgroundColor: colors.gray2,
  },
  contentStyle: {
    paddingHorizontal: 25,
    paddingBottom: 100,
  },
  flatlist: {
    paddingBottom: 100,
  },
  button: {
    position: 'absolute',
    left: 25,
    right: 25,
    bottom: 15,
  },
});
