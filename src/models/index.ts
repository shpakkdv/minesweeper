export * from './common';

/**
 * Row of Field.
 * -1 - closed;
 * 0..8 - mines around
 */
export type Row = number[];

/**
 * Matrix - converted map received from server
 */
export type Field = Row[];

/**
 * Same matrix as Field - detected mines
 */
export type Mines = boolean[][];

/**
 * x, y
 */
export type Coordinates = [number, number];
