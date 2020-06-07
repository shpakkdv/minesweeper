import { connect } from 'react-redux';

import Controls from 'components/Controls';
import { setGameLevel, tryToSolveAutomatically, solveUntilWin, startOver, finishGame, setRenderWhileSolvingValue } from './actions';
import { gameLevel, renderWhileSolving } from './selectors';

const mapStateToProps = (state) => ({
  gameLevel: gameLevel(state),
  renderWhileSolving: renderWhileSolving(state),
});

const mapDispatchToProps = {
  finishGame,
  setGameLevel,
  setRenderWhileSolvingValue,
  solveUntilWin,
  startOver,
  tryToSolveAutomatically,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
