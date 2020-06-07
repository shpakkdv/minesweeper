import { connect } from 'react-redux';

import Cell from 'components/Cell';
import { setMine } from 'containers/GameField/actions';
import { openItem } from './actions';

const mapStateToProps = (state) => ({
  mines: state.gameField.mines,
});

const mapDispatchToProps = {
  openItem,
  setMine,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
