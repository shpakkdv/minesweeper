import { Field, Mines } from 'models'

export const map1 =
`map:
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
□□□□□□□□□□
`;

export const map2 =
`map:
□□□□□□□□10
□2□□□□□□10
□3□□□□1110
□□□□□□1000
□□□□□□1000
□□□□□12110
□□□□□13□20
□□□□□□□□20
□□□□□□3210
□□□□□□1000
`;

export const field1: Field = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];

export const field2: Field = [
  [-1, -1, -1, -1, -1, -1, -1, -1,  1,  0],
  [-1,  2, -1, -1, -1, -1, -1, -1,  1,  0],
  [-1,  3, -1, -1, -1, -1,  1,  1,  1,  0],
  [-1, -1, -1, -1, -1, -1,  1,  0,  0,  0],
  [-1, -1, -1, -1, -1, -1,  1,  0,  0,  0],
  [-1, -1, -1, -1, -1,  1,  2,  1,  1,  0],
  [-1, -1, -1, -1, -1,  1,  3, -1,  2,  0],
  [-1, -1, -1, -1, -1, -1, -1, -1,  2,  0],
  [-1, -1, -1, -1, -1, -1,  3,  2,  1,  0],
  [-1, -1, -1, -1, -1, -1,  1,  0,  0,  0],
];

export const mines1: Mines = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
];

export const mines2: Mines = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false,  true, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false,  true, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false,  true, false, false],
  [false, false, false, false, false, false, false,  true, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
];
