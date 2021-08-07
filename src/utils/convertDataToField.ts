import { Field } from 'models';

export function convertDataToField(field: string): Field {
  const trimmedField = field.trim();

  return trimmedField
    .slice(trimmedField.indexOf('\n') + 1)
    .split('\n')
    .map(row => row.trim().split('').map(item => {
      const itemNumber = Number(item);

      return isNaN(itemNumber) ? -1 : itemNumber;
    }));
}
