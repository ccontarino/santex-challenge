export function formatPrice(number: string | number) {
  const price = Number(number);
  var formattedNumber = price.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 0 });
  return formattedNumber.replace(".", ",");
}
