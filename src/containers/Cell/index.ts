import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Cell from 'components/Cell';
import { setMine } from 'containers/GameField/actions';
import { mines } from 'containers/GameField/selectors';
import { openItem } from './actions';

const mapStateToProps = createStructuredSelector({
  mines,
});

const mapDispatchToProps = {
  openItem,
  setMine,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
