import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'primary' | 'secondary';

export type TableRootProps = HTMLAttributes<HTMLTableElement> & {
  size?: TableSize;
  variant?: TableVariant;
};

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  selected?: boolean;
  interactive?: boolean;
};

export type TableHeaderCellProps = ThHTMLAttributes<HTMLTableHeaderCellElement> & {
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
};

export type TableCellProps = TdHTMLAttributes<HTMLTableDataCellElement>;

export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;

export type TablePaginationProps = HTMLAttributes<HTMLDivElement> & {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}; 