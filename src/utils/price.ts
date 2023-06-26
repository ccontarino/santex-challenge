/**
 * Formats a number as a US dollar currency string.
 * @param {string | number} number - The number to format.
 * @returns {string} The formatted currency string.
 */
export function formatPrice(number: string | number) {
  const price = Number(number);
  const formattedNumber = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return formattedNumber;
}