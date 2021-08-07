// single constants
export const MINESWEEPER_URL = 'wss://hometask.eg1236.com/game1/';

// enums
export enum GameLevel {
  LEVEL_1 = '1',
  LEVEL_2 = '2',
  LEVEL_3 = '3',
  LEVEL_4 = '4',
}

export enum AppStatus {
  LOADING = 'loading',
  SOLVING = 'solving',
  FINISHED = 'finished',
}

// helpers
export const LevelLabelByLevel: Record<GameLevel, string> = {
  [GameLevel.LEVEL_1]: 'Easy',
  [GameLevel.LEVEL_2]: 'Medium',
  [GameLevel.LEVEL_3]: 'Hard',
  [GameLevel.LEVEL_4]: 'Impossible',
};

export const MinesNumberByLevel: Record<GameLevel, number> = {
  [GameLevel.LEVEL_1]: 15,
  [GameLevel.LEVEL_2]: 150,
  [GameLevel.LEVEL_3]: 1000,
  [GameLevel.LEVEL_4]: 3500,
};

export const TimeToSolveByLevel: Record<GameLevel, string> = {
  [GameLevel.LEVEL_1]: '30 seconds',
  [GameLevel.LEVEL_2]: '4 minutes',
  [GameLevel.LEVEL_3]: '15 minutes',
  [GameLevel.LEVEL_4]: 'one hour',
};

export const GAME_LEVELS: GameLevel[] = [GameLevel.LEVEL_1, GameLevel.LEVEL_2, GameLevel.LEVEL_3, GameLevel.LEVEL_4];
