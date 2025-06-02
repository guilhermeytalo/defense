import { forwardRef } from 'react';
import { TableFooterProps } from './types';

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ ...props }, ref) => {
    return <tfoot ref={ref} {...props} />;
  }
); 