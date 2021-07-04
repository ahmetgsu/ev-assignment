export const getCurrencySymbol = txt => {
  return symbols[txt];
};

const symbols = {
  EUR: '€',
  GBP: '£',
};
