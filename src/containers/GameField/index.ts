import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GameField from 'components/GameField';
import { appStatus, gameLevel, cellSize } from 'containers/Controls/selectors';
import { startGame } from './actions';
import { field } from './selectors';

const mapStateToProps = createStructuredSelector({
  field,
  gameLevel,
  appStatus,
  cellSize,
});

const mapDispatchToProps = {
  startGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);
