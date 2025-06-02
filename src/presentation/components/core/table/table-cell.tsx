import { forwardRef } from 'react';
import { TableCellProps } from './types';
import { tableCell } from './styles/table-recipe.css';

export const TableCell = forwardRef<HTMLTableDataCellElement, TableCellProps>(
  ({ className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={[tableCell, className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }
); 