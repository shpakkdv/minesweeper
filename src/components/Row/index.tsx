import React from 'react';

import Cell from 'containers/Cell';
import { RowProps } from './models';

const Row: React.FunctionComponent<RowProps> = ({ row, rowIndex }) => (
  <>
    {row.map((value, x) => (
      <Cell
        // eslint-disable-next-line react/no-array-index-key
        key={x}
        x={x}
        y={rowIndex}
        value={value}
      />
    ))}
  </>
);

export default Row;
