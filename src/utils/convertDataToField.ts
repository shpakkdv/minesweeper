export function convertDataToField(field: string): number[][] {
  const trimedField = field.trim();

  return trimedField
    .slice(trimedField.indexOf('\n') + 1)
    .split('\n')
    .map(row => row.trim().split('').map(item => {
      const itemNumber = Number(item);

      return isNaN(itemNumber) ? -1 : itemNumber;
    }));
}
