import React from 'react';

import Controls from 'containers/Controls';
import GameField from 'containers/GameField';
import styles from './styles.module.scss';

const Game: React.FunctionComponent = () => (
  <div className={styles.Game}>
    <header>
      <h1 className={styles.gameTitle}>Minesweeper</h1>
      <Controls />
    </header>
    <main className={styles.main}>
      <GameField />
    </main>
  </div>
);

export default Game;
