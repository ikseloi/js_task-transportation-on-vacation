/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RATIO = 2.5;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const PRICE_PER_DAY = 40;
  const PRICE_REDUCTION = 20;

  const basePrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return basePrice - PRICE_REDUCTION * RATIO;
  }

  if (days >= SHORT_TERM) {
    return basePrice - PRICE_REDUCTION;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
