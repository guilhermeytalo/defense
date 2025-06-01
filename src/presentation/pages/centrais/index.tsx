"use client";
import { useState } from "react";
import { Title } from "@components/core/title";
import * as styles from "./styles/centrais-page.css";
import { useCentrals, useDeleteCentral, useModels } from "@utils/queries/centrals";

export const CentraisPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState({ field: "name", order: "asc" });
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data, isLoading } = useCentrals({
    page,
    pageSize,
    sortField: sort.field,
    sortOrder: sort.order,
    search,
  });
  const { data: models } = useModels();
  const deleteCentral = useDeleteCentral();

  const handleDelete = (id: number) => setDeleteId(id.toString());
  const confirmDelete = () => {
    if (deleteId) {
      deleteCentral.mutate(Number(deleteId), { onSuccess: () => setDeleteId(null) });
    }
  };

  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Centrais ({data?.total ?? 0})</Title.Text>
      </Title.Root>
      <div >
        <button onClick={() => window.location.href = "/centrais/create"}>
          Criar Central
        </button>
        <input
          
          placeholder="Buscar por Nome"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 20, 50].map(size => (
            <option key={size} value={size}>{size} por página</option>
          ))}
        </select>
      </div>
      <div >
        <table>
        <thead>
          <tr>
            <th onClick={() => setSort({ field: "name", order: sort.order === "asc" ? "desc" : "asc" })}>
              Nome {sort.field === "name" ? (sort.order === "asc" ? "↑" : "↓") : ""}
            </th>
            <th>MAC</th>
            <th onClick={() => setSort({ field: "model", order: sort.order === "asc" ? "desc" : "asc" })}>
              Modelo {sort.field === "model" ? (sort.order === "asc" ? "↑" : "↓") : ""}
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr><td colSpan={4}>Carregando...</td></tr>
          ) : (
            data?.items.map((central) => (
              <tr key={central.id}>
                <td>{central.name}</td>
                <td>{central.mac}</td>
                <td>{models?.find(m => m.id === central.modelId)?.name ?? "-"}</td>
                <td>
                  <button onClick={() => handleDelete(central.id)} color="danger">
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
      <div>
        <button 
          
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>
        <span>Página {page}</span>
        <button 
          
          disabled={data && page * pageSize >= data.total} 
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </button>
      </div>
      {/* <Modal open={!!deleteId} onClose={() => setDeleteId(null)}>
        <p>Tem certeza que deseja excluir?</p>
        <Button onClick={confirmDelete} color="danger">Confirmar</Button>
        <Button onClick={() => setDeleteId(null)}>Cancelar</Button>
      </Modal> */}
    </div>
  );
};