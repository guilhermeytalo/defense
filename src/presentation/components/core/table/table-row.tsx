import { forwardRef } from 'react';
import { TableRowProps } from './types';
import { tableRow } from './styles/table-recipe.css';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, selected, interactive, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={`${tableRow({ selected, interactive })} ${className || ''}`}
        {...props}
      />
    );
  }
); 