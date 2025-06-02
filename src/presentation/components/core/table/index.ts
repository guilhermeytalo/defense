import { TableBody } from './table-body';
import { TableCell } from './table-cell';
import { TableFooter } from './table-footer';
import { TableHeader } from './table-header';
import { TableHeaderCell } from './table-header-cell';
import { TableRoot } from './table-root';
import { TableRow } from './table-row';
import { TablePagination } from './table-pagination';

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeaderCell: TableHeaderCell,
  Footer: TableFooter,
  Pagination: TablePagination,
} as const;

export * from './types'; 