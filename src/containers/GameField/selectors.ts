// import { } from 'models';
import { State} from './models';


// TODO: types
// TODO: use
export const gameField = (state): State => state.gameField;

export const field = (state) => gameField(state).field;
export const mines = (state) => gameField(state).mines;
