import { connect } from 'react-redux';

import GameField from 'components/GameField';
import { startGame } from './actions';

const mapStateToProps = (state) => ({
  field: state.gameField.field,
  gameLevel: state.controls.gameLevel,
  loading: state.controls.loading,
});

const mapDispatchToProps = {
  startGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);
