import { forwardRef } from 'react';
import { TableHeaderCellProps } from './types';
import { tableHeaderCell } from './styles/table-recipe.css';

export const TableHeaderCell = forwardRef<
  HTMLTableHeaderCellElement,
  TableHeaderCellProps
>(({ className, sortable, ...props }, ref) => {
  return (
    <th
      ref={ref}
      {...props}
      className={`${tableHeaderCell({ sortable })} ${className || ''}`}
    />
  );
}); 