import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Block, CHeader, Text} from '../../components/common';
import {colors} from '../../styles/colors';
import firestore from '@react-native-firebase/firestore';

const OperatorDiscount = () => {
  const operatorRef = firestore().collection('operator');
  const [operators, setOperators] = useState([]);
  const [selectedOperators, setSelectedOperators] = useState([]);

  useEffect(() => {
    getOperators();
  }, []);

  const getOperators = () => {
    operatorRef.onSnapshot(querySnapshot => {
      let operatorsArr = [];

      querySnapshot.docs.forEach(documentSnapshot => {
        operatorsArr = [
          ...operatorsArr,
          {
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          },
        ];
        setOperators(operatorsArr);
      });
    });
  };

  const onSelectedItemsChange = selectedItems => {
    setSelectedCountries(selectedItems);
  };

  return (
    <Block flex={1} color={colors.white}>
      <CHeader title="Admin Panel" />
      <Block flex={1} ph={25}>
        {operators.map(c => (
          <Text>{c.name}</Text>
        ))}
      </Block>
    </Block>
  );
};

export default OperatorDiscount;

const styles = StyleSheet.create({});
