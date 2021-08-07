import { State } from './models';

// TODO: types
const controls = (state): State => state.controls;

export const gameLevel = (state) => controls(state).gameLevel;
export const renderWhileSolving = (state) => controls(state).renderWhileSolving;
export const appStatus = (state) => controls(state).appStatus;
export const cellSize = (state) => controls(state).cellSize;
