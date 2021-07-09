import React from 'react';
import {StyleSheet} from 'react-native';
import {Block} from '../common';
import Title from '../common/Title';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {
  generalMultiSelectStyling,
  multiSelectColors,
} from '../../styles/multi-select';

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
        <SectionedMultiSelect
          items={operators}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="children"
          selectText="Choose any operator..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedOperators}
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

export default OperatorSelect;

const styles = StyleSheet.create({});
