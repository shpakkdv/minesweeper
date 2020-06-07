import React from 'react';

import { LevelLabelByLevel } from 'constant';
import { ControlsProps } from './models';
import styles from './styles.module.scss';

const Controls: React.FunctionComponent<ControlsProps> = ({
  gameLevel,
  renderWhileSolving,
  setRenderWhileSolvingValue,
  finishGame,
  solveUntilWin,
  startOver,
  tryToSolveAutomatically,
}) => {
  const disabled = !gameLevel;

  const onRenderChanged: React.ChangeEventHandler<HTMLInputElement> = () => {
    setRenderWhileSolvingValue(!renderWhileSolving);
  };

  return (
    <div className={styles.Controls}>

      <div className={styles.controlsContainer}>
        <div className={styles.column}>
          <button onClick={tryToSolveAutomatically} disabled={disabled}>Try to solve automatically</button>
          <button onClick={solveUntilWin} disabled={disabled}>Solve until the win</button>
        </div>
        <div className={styles.column}>
          <button onClick={startOver} disabled={disabled}>Start over</button>
          <button onClick={finishGame} disabled={disabled}>Finish the game</button>
        </div>
        <div className={styles.column}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="render" disabled={disabled} onChange={onRenderChanged} checked={renderWhileSolving} />
            <label htmlFor="render">Render while solving</label>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        {gameLevel && <span>{`Level: ${LevelLabelByLevel[gameLevel]}`}</span>}
      </div>

    </div>
  );
};

export default Controls;
