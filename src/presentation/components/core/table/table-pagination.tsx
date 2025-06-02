import { FC } from 'react';

interface TablePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const TablePagination: FC<TablePaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Próxima
      </button>
    </div>
  );
}; 