import {
  calculateEnergyConsumed,
  calculateTotalBeforeDiscount,
} from './billing-details';

describe('energyConsumed', () => {
  it('given params 60,60 should return {energy: 60}', () => {
    expect(calculateEnergyConsumed(60, 60)).toEqual({energy: 60});
  });
  it('given params 30,60 should return {energy: 30}', () => {
    expect(calculateEnergyConsumed(30, 60)).toEqual({energy: 30});
  });
  it('given non null params, should not return null', () => {
    expect(calculateEnergyConsumed(60, 60)).not.toBeNull();
  });
  it('given null params, should return {energy: 0}', () => {
    expect(calculateEnergyConsumed(null, null)).toEqual({energy: 0});
  });
});

describe('totalBeforeDiscount', () => {
  it('given related params, should return {beforeDiscountTotal: 32}', () => {
    const energy = 60;
    const tariff = {
      perkWH: 0.5,
      transactionFee: 2.52,
    };
    expect(calculateTotalBeforeDiscount(energy, tariff)).toEqual({
      beforeDiscountTotal: 32.52,
    });
  });

  it('given empty object or null second param, should return {beforeDiscountTotal: NaN}', () => {
    const energy = 60;
    const tariff = null;
    expect(calculateTotalBeforeDiscount(energy, tariff)).toEqual({
      beforeDiscountTotal: NaN,
    });
  });

  it('given null first param, should return {beforeDiscountTotal: tariff.transactionFee}', () => {
    let energy = null;
    const tariff = {
      perkWH: 0.5,
      transactionFee: 2.52,
    };
    expect(calculateTotalBeforeDiscount(energy, tariff)).toEqual({
      beforeDiscountTotal: 2.52,
    });
  });

  it('given undefined first param, should return {beforeDiscountTotal: NaN}', () => {
    let energy;
    const tariff = {
      perkWH: 0.5,
      transactionFee: 2.52,
    };
    expect(calculateTotalBeforeDiscount(energy, tariff)).toEqual({
      beforeDiscountTotal: NaN,
    });
  });
});
