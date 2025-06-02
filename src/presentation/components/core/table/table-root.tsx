import { forwardRef } from 'react';
import { TableRootProps } from './types';
import { tableRoot } from './styles/table-recipe.css';

export const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={`${tableRoot({ size, variant })} ${className || ''}`}
        {...props}
      />
    );
  }
); 