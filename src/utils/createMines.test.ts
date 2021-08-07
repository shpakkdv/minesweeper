import { createMines } from './createMines';
import * as mock from './data.mock';

describe('#createMines', () => {
  it('create mines array', () => {
    expect(createMines(mock.field1)).toEqual(mock.mines1);
  });

  it('all values should be always "false"', () => {
    expect(createMines(mock.field2)).toEqual(mock.mines1);
  });

  it('every row should has own link', () => {
    const mines = createMines(mock.field2);
    const isEveryRowIndependent = mines.every((row, index, mines) => {
      if (index === 0) {
        return row !== mines[mines.length - 1];
      }

      return row !== mines[index - 1];
    });

    expect(isEveryRowIndependent).toBe(true);
  });
});
