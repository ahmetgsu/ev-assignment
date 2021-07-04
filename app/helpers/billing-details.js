export const calculateEnergyConsumed = (time, power) => {
  const timeInHour = time / 60;
  const energy = timeInHour * power;
  return {energy};
};

export const calculateTotalBeforeDiscount = (energy, tariff) => {
  const beforeDiscountTotal = +(
    energy * tariff?.perkWH +
    tariff?.transactionFee
  ).toFixed(2);
  return {beforeDiscountTotal};
};

export const calculateDiscount = (energy, tariff) => {
  let combinedDiscount = 0;
  if (tariff.discount_perkWH && tariff?.discount_perkWH > 0) {
    combinedDiscount = energy * (tariff?.perkWH - tariff?.final_perkWH);
  }
  if (tariff.discount_transactionFee && tariff?.discount_transactionFee > 0) {
    combinedDiscount += tariff?.transactionFee - tariff?.final_transactionFee;
  }
  combinedDiscount = +combinedDiscount.toFixed(2);
  return {combinedDiscount};
};
