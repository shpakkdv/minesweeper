import React, { useCallback } from 'react';

import { CellProps } from './models';
import styles from './styles.module.scss';

const Cell: React.FunctionComponent<CellProps> = ({ x, y, value, mines, openItem, setMine }) => {
  const mine = mines[y][x];

  const onClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    () => {
      if (!mine) {
        openItem(x, y);
      }
    },
    [mine, openItem, x, y],
  );

  const onContextMenu = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      event.preventDefault();
      setMine(x, y, !mine);
    },
    [mine, setMine, x, y],
  );

  const opened = value !== -1;
  const title = `x: ${x}, y: ${y}`;

  if (opened) {
    return (
      <div
        className={styles.OpenedCell}
        title={title}
      >
        {value === 0 ? '' : value}
      </div>
    );
  }

  return (
    <button
      className={styles.Cell}
      onContextMenu={onContextMenu}
      onClick={onClick}
      title={title}
    >
      {mine ? '!' : ''}
    </button>
  );
};

export default Cell;
