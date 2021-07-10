import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Block, CHeader, ColorButton} from '../../components/common';
import {colors} from '../../styles/colors';
import CountrySelect from '../../components/home-admin/CountrySelect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Divider} from 'react-native-paper';
import ListItem from './ListItem';
import {decrement, increment} from '../../helpers/discount';
import {getNewStates} from '../../helpers/getNewStates';
import {useIsFocused} from '@react-navigation/native';
import DiscountRate from '../../components/home-admin/DiscountRate';
import DiscountType from '../../components/home-admin/DiscountType';

const CountryDiscount = () => {
  const isFocused = useIsFocused();
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [relatedChargePoints, setRelatedChargePoints] = useState([]);
  const [unrelatedChargePoints, setUnrelatedChargePoints] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [checked, setChecked] = useState([]);
  const [chargepoints, setChargepoints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isFocused && getData();
    return () => {
      setSelectedCountries([]);
      setChecked([]);
      setDiscount(0);
    };
  }, [isFocused]);

  useEffect(() => {
    const {relatedState, unrelatedState} = getNewStates(
      selectedCountries,
      chargepoints,
      'country',
    );
    setRelatedChargePoints(relatedState);
    setUnrelatedChargePoints(unrelatedState);
  }, [JSON.stringify(selectedCountries), JSON.stringify(chargepoints)]);

  const getData = async () => {
    setLoading(true);
    const cPoints = await AsyncStorage.getItem('chargepoints');
    if (cPoints != null) {
      const parsedCPoints = JSON.parse(cPoints);
      let sections = [{name: 'Country', id: 0, children: []}];
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
        sections[0].children = [...countriesArr];
        setCountries(sections);
        setChargepoints(parsedCPoints);
        setLoading(false);
      });
    }
  };

  const onSelectedItemsChange = selectedItems => {
    setSelectedCountries(selectedItems);
  };

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

  const onChangeNumber = t => {
    if (t > 100) {
      setDiscount(100);
      return;
    }
    setDiscount(t);
  };

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
      <CHeader title="Admin Panel" right />
      <FlatList
        data={relatedChargePoints}
        style={styles.flatlist}
        nestedScrollEnabled
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
              loading={loading}
            />
            <DiscountRate
              increment={increment}
              decrement={decrement}
              cb={setDiscount}
              discount={discount}
              onTextChange={onChangeNumber}
            />
            <DiscountType checked={checked} onCheckPress={onCheckPress} />
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
