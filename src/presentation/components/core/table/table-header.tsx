import { forwardRef } from 'react';
import { TableHeaderProps } from './types';

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ ...props }, ref) => {
    return <thead ref={ref} {...props} />;
  }
); 