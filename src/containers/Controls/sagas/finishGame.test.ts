import { runSaga } from 'redux-saga';

import { setAppStatus, setGameLevel } from 'containers/Controls/actions';
import { setField, setMines } from 'containers/GameField/actions';
import { finishGame } from './finishGame';

jest.mock('containers/Controls/actions');
jest.mock('containers/GameField/actions');
jest.mock('services/Minesweeper', () => ({
  getMinesweeper: () => ({ finish: jest.fn() }),
}));

globalThis.confirm = jest.fn(() => true);
globalThis.alert = jest.fn();


describe('finishGame', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatch new values', () => {
    const dispatch = jest.fn();
    runSaga({ dispatch }, finishGame, null);

    expect(setGameLevel).toHaveBeenCalledTimes(1);
    expect((setGameLevel as jest.Mock).mock.calls[0][0]).toBeNull();

    expect(setAppStatus).toHaveBeenCalledTimes(1);
    expect((setAppStatus as jest.Mock).mock.calls[0][0]).toBeNull();

    expect(setField).toHaveBeenCalledTimes(1);
    expect((setField as jest.Mock).mock.calls[0][0]).toEqual([[]]);

    expect(setMines).toHaveBeenCalledTimes(1);
    expect((setMines as jest.Mock).mock.calls[0][0]).toEqual([[]]);
  });
});
