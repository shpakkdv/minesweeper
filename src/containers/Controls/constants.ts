import { keyMirror } from 'utils/keyMirror';

export const ActionType = keyMirror(
  {
    FINISH_GAME: null,
    SET_GAME_LEVEL: null,
    SET_GAME_LOADING: null,
    SET_RENDER_WHILE_SOLVING_VALUE: null,
    SOLVE_UNTIL_WIN: null,
    START_OVER: null,
    TRY_TO_SOLVE_AUTOMATICALLY: null,
  },
  'Controls',
);
