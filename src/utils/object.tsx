/**
 * Creates a deep copy of an array.
 *
 * @param {Array} array - The array to copy.
 * @returns {Array} A new array that is a deep copy of the original.
 */
export const deepCopyArray = (array: any[]) =>
  JSON.parse(JSON.stringify(array));
