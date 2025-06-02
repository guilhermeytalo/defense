"use client";
import { useState } from "react";
import { Title } from "@components/core/title";
import * as styles from "./styles/centrais-page.css";
import { useCentrals, useDeleteCentral, useModels } from "@utils/queries/centrals";
import { Table } from "@components/core/table";

export const CentralsPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState<{ field: string; order: "asc" | "desc" }>({ field: "name", order: "asc" });
  const [search, setSearch] = useState("");
  const [modelFilter, setModelFilter] = useState<string>("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data, isLoading } = useCentrals({
    page,
    pageSize,
    sortField: sort.field,
    sortOrder: sort.order as "asc" | "desc",
    search,
    modelId: modelFilter,
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

      <div>
        <button onClick={() => (window.location.href = "/centrals/create")}>
          Criar Central
        </button>
        <input
          placeholder="Buscar por Nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
        >
          <option value="">Todos os modelos</option>
          {models?.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size} por página
            </option>
          ))}
        </select>
      </div>

      <Table.Root size="md" variant="primary">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sortable
              sortDirection={sort.field === "name" ? sort.order : null}
              onClick={() =>
                setSort({
                  field: "name",
                  order: sort.order === "asc" ? "desc" : "asc",
                })
              }
            >
              Nome
            </Table.HeaderCell>
            <Table.HeaderCell>MAC</Table.HeaderCell>
            <Table.HeaderCell
              sortable
              sortDirection={sort.field === "model" ? sort.order : null}
              onClick={() =>
                setSort({
                  field: "model",
                  order: sort.order === "asc" ? "desc" : "asc",
                })
              }
            >
              Modelo
            </Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan={4}>Carregando...</Table.Cell>
            </Table.Row>
          ) : (
            data?.items.map((central) => (
              <Table.Row key={central.id} interactive>
                <Table.Cell>{central.name}</Table.Cell>
                <Table.Cell>{central.mac}</Table.Cell>
                <Table.Cell>{central.model?.name ?? ""}</Table.Cell>
                <Table.Cell>
                  <button onClick={() => handleDelete(central.id)} color="danger">
                    Excluir
                  </button>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={4}>
              <Table.Pagination
                totalItems={data?.total ?? 0}
                itemsPerPage={pageSize}
                currentPage={page}
                onPageChange={setPage}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Root>

      {/*
      <Modal open={!!deleteId} onClose={() => setDeleteId(null)}>
        <p>Tem certeza que deseja excluir?</p>
        <Button onClick={confirmDelete} color="danger">Confirmar</Button>
        <Button onClick={() => setDeleteId(null)}>Cancelar</Button>
      </Modal>
      */}
    </div>
  );
};
