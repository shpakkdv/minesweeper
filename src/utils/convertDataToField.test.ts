import { convertDataToField } from './convertDataToField';
import * as mock from './data.mock';

describe('#convertDataToField', () => {
  it('convert string map to array of numbers #1', () => {
    expect(convertDataToField(mock.map1)).toEqual(mock.field1);
  });

  it('convert string map to array of numbers #2', () => {
    expect(convertDataToField(mock.map2)).toEqual(mock.field2);
  });
});
