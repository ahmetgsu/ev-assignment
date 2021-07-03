import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../common';
import MultiSelect from 'react-native-multiple-select';
import Title from '../common/Title';
import {colors} from '../../styles/colors';

const OperatorSelect = ({
  operators,
  onSelectedItemsChange,
  selectedOperators,
}) => {
  const multiSelectRef = React.useRef();
  return (
    <Block flex={false} mt={20}>
      <Title>Please select operators to apply discount</Title>
      <Block flex={false} mt={20}>
        <MultiSelect
          hideTags
          items={operators}
          uniqueKey="id"
          ref={multiSelectRef}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedOperators}
          selectText={'Select Operators'}
          searchInputPlaceholderText="Search operators..."
          // onChangeInput={text => console.log(text)}
          // altFontFamily="ProximaNova-Light"
          tagRemoveIconColor={colors.main}
          tagBorderColor={colors.main}
          tagTextColor={colors.main}
          selectedItemTextColor={colors.main}
          selectedItemIconColor={colors.main}
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          // submitButtonColor={colors.main}
          // submitButtonText="Submit"
          styleListContainer={{marginTop: 15}}
          styleRowList={{height: 40}}
          hideSubmitButton
          hideDropdown
        />
      </Block>
      <Block>
        {multiSelectRef?.current?.getSelectedItemsExt(selectedOperators)}
      </Block>
    </Block>
  );
};

export default OperatorSelect;

const styles = StyleSheet.create({});
