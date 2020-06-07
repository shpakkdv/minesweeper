import { keyMirror } from 'utils/keyMirror';

export const ActionType = keyMirror(
  {
    SET_FIELD: null,
    SET_MINES: null,
    SET_MINE: null,
    START_GAME: null,
  },
  'GameField',
);
