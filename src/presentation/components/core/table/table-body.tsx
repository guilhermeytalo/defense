import { forwardRef } from 'react';
import { TableBodyProps } from './types';

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ ...props }, ref) => {
    return <tbody ref={ref} {...props} />;
  }
); 