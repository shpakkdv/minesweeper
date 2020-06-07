import classNames from 'classnames';
import React, { useState } from 'react';

import Row from 'components/Row';
import { AppStatus, GameLevel, GAME_LEVELS, LevelLabelByLevel } from 'constant';
import { GameFieldProps } from './models';
import styles from './styles.module.scss';

const GameField: React.FunctionComponent<GameFieldProps> = ({ field, gameLevel, appStatus, cellSize, startGame }) => {
  const [selectedLevel, setLevel] = useState(gameLevel ?? GAME_LEVELS[0]);

  const onStartGameClick: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    startGame(selectedLevel);
  };

  if (appStatus === AppStatus.LOADING) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!gameLevel) {
    return (
      <div className={styles.chooseLevel}>
        <h2>Choose game level:</h2>
        <form>
          {GAME_LEVELS.map((level) => (
            <div key={level} className={styles.option}>
              {getRadioButton(level, LevelLabelByLevel[level], setLevel, selectedLevel === level)}
            </div>
          ))}
        </form>
        <button onClick={onStartGameClick}>START GAME</button>
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.GameField, { [styles.disabled]: appStatus === AppStatus.SOLVING })}
      style={{ gridTemplateColumns: `repeat(${field[0].length}, ${cellSize}px)`, gridAutoRows: `${cellSize}px` }}
    >
      {field.map((row, index) => (
        <Row key={index} rowIndex={index} row={row} />
      ))}
    </div>
  );
};

export default GameField;

const getRadioButton = (id: GameLevel, label: string, onClick: (id: GameLevel) => void, checked: boolean): JSX.Element => (
  <>
    <input type="radio" id={id} name="level" onChange={(event) => event.target.checked && onClick(id)} checked={checked} />
    <label htmlFor={id}>{label}</label>
  </>
);
