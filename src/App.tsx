import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Game from 'components/Game';

import 'normalize.css/normalize.css';
import 'styles/main.scss';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Game />
  </BrowserRouter>
);

export default App;
