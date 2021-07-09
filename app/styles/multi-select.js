import {colors} from './colors';

export const generalMultiSelectStyling = {
  modalWrapper: {paddingVertical: 60, paddingHorizontal: 5},
  itemText: {fontSize: 22, fontFamily: 'Arial', lineHeight: 26},
  subItemText: {fontSize: 18, fontFamily: 'Arial'},
  selectedSubItemText: {
    color: colors.main,
    fontFamily: 'Arial',
  },
  confirmText: {fontFamily: 'Arial', fontSize: 20, padding: 5},
  searchTextInput: {fontFamily: 'Arial'},
};

export const multiSelectColors = {
  primary: colors.green1,
  success: colors.main,
  chipColor: colors.main,
  cancel: colors.red1,
};
