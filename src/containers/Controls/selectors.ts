import { State } from './models';

// TODO: types
// TODO: use
const controls = (state): State => state.controls;

export const gameLevel = (state) => controls(state).gameLevel;
export const loading = (state) => controls(state).loading;
export const renderWhileSolving = (state) => controls(state).renderWhileSolving;
