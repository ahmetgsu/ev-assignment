import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../common';
import Title from '../common/Title';
import {colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {
  generalMultiSelectStyling,
  multiSelectColors,
} from '../../styles/multi-select';
const CountrySelect = ({
  countries,
  onSelectedItemsChange,
  selectedCountries,
}) => {
  return (
    <Block flex={false} mt={20}>
      <Title>Please select countries to apply discount</Title>

      <Block flex={false} mt={20}>
        <SectionedMultiSelect
          items={countries}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="children"
          selectText="Choose any country..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedCountries}
          showDropDowns={false}
          showCancelButton
          onCancel={() => onSelectedItemsChange([])}
          searchPlaceholderText="Search country"
          styles={generalMultiSelectStyling}
          colors={multiSelectColors}
        />
      </Block>
    </Block>
  );
};

export default CountrySelect;

const styles = StyleSheet.create({});
