import { runSaga } from 'redux-saga';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { getMinesweeper } from 'services/Minesweeper';
import { solveUntilWin as solve } from 'services/MinesweeperSolving/solveUntilWin';
import { solveUntilWin } from './solveUntilWin';

jest.mock('services/MinesweeperSolving/solveUntilWin');
jest.mock('containers/Controls/actions', () => ({
  setAppStatus: jest.fn(() => ({})),
}));
jest.mock('services/Minesweeper', () => ({
  getMinesweeper: jest.fn(() => ({})),
}));

globalThis.confirm = jest.fn(() => true);
globalThis.alert = jest.fn();

describe('finishGame', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Run solve until the win and set correct app status', () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ controls: {}, gameField: {} }));
    runSaga({ dispatch, getState }, solveUntilWin, null);

    expect(setAppStatus).toHaveBeenCalledTimes(1);
    expect((setAppStatus as jest.Mock).mock.calls[0][0]).toBe(AppStatus.SOLVING);
    expect(solve).toHaveBeenCalledTimes(1);
  });

  it('Set correct app status in case of error', () => {
    (getMinesweeper as jest.Mock).mockImplementation(() => { throw new Error('You lose'); });

    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ controls: {}, gameField: {} }));
    runSaga({ dispatch, getState }, solveUntilWin, null);

    expect(setAppStatus).toHaveBeenCalledTimes(2);
    expect((setAppStatus as jest.Mock).mock.calls[0][0]).toBe(AppStatus.SOLVING);
    expect((setAppStatus as jest.Mock).mock.calls[1][0]).toBe(AppStatus.FINISHED);
  });
});
