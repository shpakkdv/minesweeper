// single constants
export const MINESWEEPER_URL = 'wss://hometask.eg1236.com/game1/';

// enums
export enum GameLevel {
  Level_1 = '1',
  Level_2 = '2',
  Level_3 = '3',
  Level_4 = '4',
}

export enum AppStatus {
  LOADING = 'loading',
  SOLVING = 'solving',
  FINISHED = 'finished',
}

// helpers
export const LevelLabelByLevel: Record<GameLevel, string> = {
  [GameLevel.Level_1]: 'Easy',
  [GameLevel.Level_2]: 'Medium',
  [GameLevel.Level_3]: 'Hard',
  [GameLevel.Level_4]: 'Impossible',
};

export const MinesNumberByLevel: Record<GameLevel, number> = {
  [GameLevel.Level_1]: 15,
  [GameLevel.Level_2]: 150,
  [GameLevel.Level_3]: 1000,
  [GameLevel.Level_4]: 3500,
};

export const TimeToSolveByLevel: Record<GameLevel, string> = {
  [GameLevel.Level_1]: '30 seconds',
  [GameLevel.Level_2]: '2 minutes',
  [GameLevel.Level_3]: '15 minutes',
  [GameLevel.Level_4]: 'one hour',
};

export const GAME_LEVELS: GameLevel[] = [GameLevel.Level_1, GameLevel.Level_2, GameLevel.Level_3, GameLevel.Level_4];
