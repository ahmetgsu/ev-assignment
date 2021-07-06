import {calculateEnergyConsumed} from '../app/helpers/billing-details';

describe('energyConsumed', () => {
  it('should properly gives expected result', () => {
    expect(calculateEnergyConsumed(60, 60)).toEqual({energy: 60});
    expect(calculateEnergyConsumed(30, 60)).toEqual({energy: 30});
  });
  it('should not be null', () => {
    expect(calculateEnergyConsumed(60, 60)).not.toBeNull();
  });
});
