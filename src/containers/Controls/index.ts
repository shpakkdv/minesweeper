import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Controls from 'components/Controls';
import { minesFound } from 'containers/GameField/selectors';
import {
  setCellSize,
  tryToSolveAutomatically,
  solveUntilWin,
  startOver,
  finishGame,
  setRenderWhileSolvingValue,
} from './actions';
import { appStatus, cellSize, gameLevel, renderWhileSolving } from './selectors';

const mapStateToProps = createStructuredSelector({
  appStatus,
  cellSize,
  gameLevel,
  renderWhileSolving,
  minesFound,
});

const mapDispatchToProps = {
  finishGame,
  setCellSize,
  setRenderWhileSolvingValue,
  solveUntilWin,
  startOver,
  tryToSolveAutomatically,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
