import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../common';
import MultiSelect from 'react-native-multiple-select';
import Title from '../common/Title';
import {colors} from '../../styles/colors';

const CountrySelect = ({
  countries,
  onSelectedItemsChange,
  selectedCountries,
  onToggleList,
}) => {
  const multiSelectRef = React.useRef();
  return (
    <Block flex={false} mt={20}>
      <Title>Please select countries to apply discount</Title>

      <Block flex={false} mt={20}>
        <MultiSelect
          hideTags
          items={countries}
          uniqueKey="id"
          ref={multiSelectRef}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedCountries}
          selectText={'Select Country/Countries'}
          searchInputPlaceholderText="Search country..."
          onChangeInput={text => console.log(text)}
          tagRemoveIconColor={colors.main}
          tagBorderColor={colors.main}
          tagTextColor={colors.main}
          selectedItemTextColor={colors.main}
          selectedItemIconColor={colors.main}
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor={colors.main}
          submitButtonText="Submit"
          styleListContainer={{marginTop: 15}}
          styleRowList={{height: 40}}
          hideSubmitButton
          hideDropdown
          onToggleList={onToggleList}
        />
        {multiSelectRef?.current && (
          <Block flex={false}>
            {multiSelectRef?.current?.getSelectedItemsExt(selectedCountries)}
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default CountrySelect;

const styles = StyleSheet.create({});
