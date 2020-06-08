import { Coordinates } from 'models';
import { getItemsAround, getClosedItems, getMines, getCanOpenItems } from './getItems';
import * as mock from './data.mock';

describe('#getItems', () => {
  describe('#getItemsAround', () => {
    // x / y
    // 00 10 20 30
    // 01 11 21 31
    // 02 12 22 32
    // 03 13 23 33

    it('get coordinates around (0, 0)', () => {
      const coordinatesAround: Coordinates[] = [
        /*0,0*/ [1, 0],
        [0, 1], [1, 1],
      ];
      expect(getItemsAround(0, 0, 4, 4)).toEqual(coordinatesAround);
    });

    it('get coordinates around (1, 1)', () => {
      const coordinatesAround: Coordinates[] = [
        [0, 0], [1, 0], [2, 0],
        [0, 1], /*1,1*/ [2, 1],
        [0, 2], [1, 2], [2, 2],
      ];
      expect(getItemsAround(1, 1, 4, 4)).toEqual(coordinatesAround);
    });

    it('get coordinates around (3, 2)', () => {
      const coordinatesAround: Coordinates[] = [
        [2, 1], [3, 1],
        [2, 2], /*3,2*/
        [2, 3], [3, 3],
      ];
      expect(getItemsAround(3, 2, 4, 4)).toEqual(coordinatesAround);
    });
  });

  describe('#getClosedItems', () => {
    it('get coordinates of closed item among passed coordinates (all closed)', () => {
      expect(getClosedItems([[1, 2], [2, 3], [4, 5], [6, 7]], mock.field1)).toEqual([[1, 2], [2, 3], [4, 5], [6, 7]]);
    });

    it('get coordinates of closed item among passed coordinates (all opened)', () => {
      expect(getClosedItems([[9, 2], [9, 3], [1, 1], [1, 2]], mock.field2)).toEqual([]);
    });

    it('get coordinates of closed item among passed coordinates (partially opened)', () => {
      expect(getClosedItems([[0, 0], [9, 2], [9, 3], [1, 1], [1, 2], [3, 9]], mock.field2)).toEqual([[0, 0], [3, 9]]);
    });
  });

  describe('#getMines', () => {
    it('get coordinates of mines among passed coordinates (all mines)', () => {
      expect(getMines([[7, 1], [5, 4], [7, 6], [7, 7]], mock.mines2)).toEqual([[7, 1], [5, 4], [7, 6], [7, 7]]);
    });

    it('get coordinates of mines among passed coordinates (no mines)', () => {
      expect(getMines([[7, 2], [1, 3], [5, 8], [8, 8]], mock.mines2)).toEqual([]);
    });

    it('get coordinates of mines among passed coordinates (not all mines)', () => {
      expect(getMines([[7, 1], [1, 3], [5, 8], [7, 7]], mock.mines2)).toEqual([[7, 1], [7, 7]]);
    });
  });

  describe('#getCanOpenItems', () => {
    it('get coordinates of items which can be opened (closed and not a mine) #1', () => {
      expect(getCanOpenItems([[7, 1], [5, 4], [7, 6], [7, 7], [8, 0], [9, 0]], mock.field2, mock.mines2)).toEqual([]);
    });

    it('get coordinates of items which can be opened (closed and not a mine) #2', () => {
      expect(getCanOpenItems([[7, 0], [6, 0], [7, 1], [6, 1]], mock.field2, mock.mines2)).toEqual([[7, 0], [6, 0], [6, 1]]);
    });
  });
});
