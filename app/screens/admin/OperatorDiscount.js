import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, FlatList} from 'react-native';
import {Divider} from 'react-native-paper';
import {Block, CHeader, ColorButton} from '../../components/common';
import OperatorSelect from '../../components/home-admin/OperatorSelect';
import {getNewStates} from '../../helpers/getNewStates';
import {colors} from '../../styles/colors';
import ListItem from './ListItem';
import {decrement, increment} from '../../helpers/discount';
import {useIsFocused} from '@react-navigation/native';
import DiscountRate from '../../components/home-admin/DiscountRate';
import DiscountType from '../../components/home-admin/DiscountType';

const OperatorDiscount = () => {
  const isFocused = useIsFocused();
  const [operators, setOperators] = useState([]);
  const [selectedOperators, setSelectedOperators] = useState([]);
  const [chargepoints, setChargepoints] = useState([]);
  const [relatedChargePoints, setRelatedChargePoints] = useState([]);
  const [unrelatedChargePoints, setUnrelatedChargePoints] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    isFocused && getData();
    return () => {
      setSelectedOperators([]);
      setChecked([]);
      setDiscount(0);
    };
  }, [isFocused]);

  useEffect(() => {
    const {relatedState, unrelatedState} = getNewStates(
      selectedOperators,
      chargepoints,
      'operator',
    );
    setRelatedChargePoints(relatedState);
    setUnrelatedChargePoints(unrelatedState);
  }, [JSON.stringify(selectedOperators), JSON.stringify(chargepoints)]);

  const getData = async () => {
    const cPoints = await AsyncStorage.getItem('chargepoints');
    if (cPoints != null) {
      const parsedCPoints = JSON.parse(cPoints);
      setChargepoints(parsedCPoints);
      let sections = [{name: 'Operator', id: 1, children: []}];
      let operatorsArr = [];
      parsedCPoints.forEach(cp => {
        operatorsArr = [
          ...operatorsArr,
          {
            name: cp.operator,
            id: cp.operator,
          },
        ];
      });
      sections[0].children = [...operatorsArr];
      setOperators(sections);
    }
  };

  const onSelectedItemsChange = selectedItems => {
    setSelectedOperators(selectedItems);
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

  const onChangeNumber = t => {
    if (t > 100) {
      setDiscount(100);
      return;
    }
    setDiscount(t);
  };

  const _renderItem = ({item, index}) => <ListItem item={item} key={index} />;

  return (
    <Block flex={1} color={colors.white}>
      <CHeader title="Admin Panel" right />
      <FlatList
        data={relatedChargePoints}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
            <OperatorSelect
              operators={operators}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedOperators={selectedOperators}
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
          disabled={selectedOperators.length === 0 || checked.length === 0}
        />
      </Block>
    </Block>
  );
};

export default OperatorDiscount;

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
