import clamp from 'lodash/clamp';
import classNames from 'classnames';
import React, { useCallback, useState, useEffect } from 'react';

import { AppStatus, LevelLabelByLevel, MinesNumberByLevel } from 'constant';
import { ControlsProps } from './models';
import styles from './styles.module.scss';

const Controls: React.FunctionComponent<ControlsProps> = ({
  appStatus,
  cellSize,
  gameLevel,
  renderWhileSolving,
  minesFound,
  setCellSize,
  setRenderWhileSolvingValue,
  finishGame,
  solveUntilWin,
  startOver,
  tryToSolveAutomatically,
}) => {
  const [cellSizeValue, setCellSizeValue] = useState(cellSize);
  useEffect(() => {
    setCellSizeValue(cellSize);
  }, [cellSize, setCellSizeValue]);

  const onRenderChanged = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    () => {
      setRenderWhileSolvingValue(!renderWhileSolving);
    },
    [renderWhileSolving, setRenderWhileSolvingValue],
  );

  const onCellSizeChanged = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const value = Number(event.target.value);

      if (isFinite(value)) {
        setCellSizeValue(value);
      }
    },
    [setCellSizeValue],
  );

  const onCellSizeBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>(() => {
    const newValue = clamp(Number(cellSizeValue), 5, 100);

    if (newValue !== cellSize) {
      setCellSize(newValue);
    }

    setCellSizeValue(newValue);
  }, [cellSize, setCellSize, cellSizeValue, setCellSizeValue]);

  const onCellSizePressEnter = useCallback<React.KeyboardEventHandler<HTMLInputElement>>((event) => {
    if (event.key === 'Enter') {
      onCellSizeBlur(event as any);
    }
  }, [onCellSizeBlur]);

  const notStarted = !gameLevel;
  const canNotSolve = notStarted || [AppStatus.SOLVING, AppStatus.FINISHED].includes(appStatus);

  return (
    <div className={styles.Controls}>
      <div className={styles.controlsContainer}>
        <div className={styles.column}>
          <button onClick={tryToSolveAutomatically} disabled={canNotSolve}>Try to solve automatically</button>
          <button onClick={solveUntilWin} disabled={canNotSolve}>Solve until the win</button>
        </div>
        <div className={styles.column}>
          <button onClick={startOver} disabled={notStarted}>Start over</button>
          <button onClick={finishGame} disabled={notStarted}>Finish the game</button>
        </div>
        <div className={styles.column}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="render" disabled={canNotSolve} onChange={onRenderChanged} checked={renderWhileSolving} />
            <label htmlFor="render">Render while solving</label>
          </div>
          <div className={styles.numericInput}>
            <input
              type="number"
              id="cellSize"
              min="5"
              max="100"
              disabled={notStarted}
              value={cellSizeValue}
              onChange={onCellSizeChanged}
              onBlur={onCellSizeBlur}
              onKeyDown={onCellSizePressEnter}
            />
            <label htmlFor="cellSize">Cell size (5-100px)</label>
          </div>
        </div>
      </div>
      {gameLevel &&
        <div className={classNames(styles.column, styles.info)}>
          <span>{'Level: '}<b>{LevelLabelByLevel[gameLevel]}</b></span>
          <span>{'Mines found: '}<b>{`${minesFound} / ${MinesNumberByLevel[gameLevel]}`}</b></span>
        </div>
      }
    </div>
  );
};

export default Controls;
