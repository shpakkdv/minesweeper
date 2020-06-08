import { Field, Mines } from 'models';
import { validateField } from './validateField';

describe('#validateField', () => {
  it('Completely closed field is valid', () => {
    const field: Field = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
    const mines: Mines = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(true);
  });

  it('Field is valid #1', () => {
    const field: Field = [
      [1,  -1, 0],
      [-1, -1, 0],
      [-1,  0, 0],
    ];
    const mines: Mines = [
      [false, false,  false],
      [false, false, false],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(true);
  });

  it('Field is valid #2', () => {
    const field: Field = [
      [2,  -1, 0],
      [-1, -1, 0],
      [-1,  0, 0],
    ];
    const mines: Mines = [
      [false, false,  false],
      [false, false, false],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(true);
  });

  it('Field is valid #3', () => {
    const field: Field = [
      [2, -1, 0],
      [-1, 0, 0],
      [-1, 0, 0],
    ];
    const mines: Mines = [
      [false,  true,  false],
      [true,  false, false],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(true);
  });

  it('Field is valid #4', () => {
    const field: Field = [
      [-1, -1, -1],
      [-1,  5, -1],
      [-1, -1, -1],
    ];
    const mines: Mines = [
      [true,  true,  true],
      [true,  false, true],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(true);
  });

  it('Field is not valid (mines around more than item value)', () => {
    const field: Field = [
      [-1, -1, -1],
      [-1,  5, -1],
      [-1, -1, -1],
    ];
    const mines: Mines = [
      [true,  true,  true],
      [true,  false, true],
      [false, true, false],
    ];
    expect(validateField(field, mines)).toBe(false);
  });

  it('Field is not valid (mines around and closed cells less than item value)', () => {
    const field: Field = [
      [-1, -1, 0],
      [-1,  5, 0],
      [-1,  0, 0],
    ];
    const mines: Mines = [
      [true,  true,  false],
      [false, false, false],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(false);
  });

  it('Field is not valid (mines around less than item value)', () => {
    const field: Field = [
      [2, -1, 0],
      [0,  0, 0],
      [-1, 0, 0],
    ];
    const mines: Mines = [
      [false,  true,  false],
      [false, false, false],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(false);
  });

  it('Field is not valid (mines around and closed cells less than item value)', () => {
    const field: Field = [
      [3, -1, 0],
      [0, -1, 0],
      [-1, 0, 0],
    ];
    const mines: Mines = [
      [false,  true, false],
      [false, false, false],
      [false, false, false],
    ];
    expect(validateField(field, mines)).toBe(false);
  });
});
