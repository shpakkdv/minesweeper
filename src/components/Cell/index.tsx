import React from 'react';

import { CellProps } from './models';
import styles from './styles.module.scss';

const Cell: React.FunctionComponent<CellProps> = ({ x, y, value, mines, openItem, setMine }) => {
  const mine = mines[y][x];

  const onClick = () => {
    if (!mine) {
      openItem(x, y);
    }
  };

  const rightMouseClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setMine(x, y, !mine);
  };

  const opened = value !== -1;

  if (opened) {
    return (
      <div
        className={styles.OpenedCell}
        title={`x: ${x}, y: ${y}`}
      >
        {value === 0 ? '' : value}
      </div>
    );
  }

  return (
    <button
      className={styles.Cell}
      onContextMenu={rightMouseClick}
      onClick={onClick}
      title={`x: ${x}, y: ${y}`}
    >
      {mine ? '!' : ''}
    </button>
  );
};

export default Cell;
