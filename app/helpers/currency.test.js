import {getCurrencySymbol} from './currency';

describe('getCurrencySymbol', () => {
  it('given EUR param, should return €', () => {
    expect(getCurrencySymbol('EUR')).toEqual('€');
  });
  it('given non-existing param, should return undefined', () => {
    expect(getCurrencySymbol('TRY')).toBeUndefined();
  });
  it('given null param, should return undefined', () => {
    expect(getCurrencySymbol(null)).toBeUndefined();
  });
});
