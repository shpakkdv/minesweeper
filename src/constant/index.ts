// single constants
export const MINESWEEPER_URL = 'wss://hometask.eg1236.com/game1/';

// enums
export enum GameLevel {
  Level_1 = '1',
  Level_2 = '2',
  Level_3 = '3',
  Level_4 = '4',
}

// helpers
export const LevelLabelByLevel: Record<GameLevel, string> = {
  [GameLevel.Level_1]: 'Easy',
  [GameLevel.Level_2]: 'Medium',
  [GameLevel.Level_3]: 'Hard',
  [GameLevel.Level_4]: 'Impossible',
};

export const GAME_LEVELS = [GameLevel.Level_1, GameLevel.Level_2, GameLevel.Level_3, GameLevel.Level_4];
