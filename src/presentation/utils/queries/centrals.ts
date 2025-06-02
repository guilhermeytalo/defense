import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {api} from "@utils/api";

interface CentralsParams {
  page: number;
  pageSize: number;
  sortField: string;
  sortOrder: 'asc' | 'desc';
  search: string;
  modelId?: string;
}

interface Central {
  id: number;
  name: string;
  mac: string;
  modelId: number;
}

interface Model {
  id: string;
  name: string;
}

interface CentralWithModel extends Central {
  model?: Model;
}

interface CentralsResponse {
  items: CentralWithModel[];
  total: number;
}

export const useCentrals = (params: CentralsParams) =>
  useQuery<CentralsResponse>({
    queryKey: ['centrals', params],
    queryFn: async () => {
      const [{ data: allCentrals }, { data: models }] = await Promise.all([
        api.get<Central[]>('/centrals'),
        api.get<Model[]>('/models')
      ]);

      let centralsWithModels: CentralWithModel[] = allCentrals.map(central => {
        const model = models.find(m => Number(m.id) === central.modelId);

        return {
          ...central,
          model,
        };
      });

      if (params.search) {
        const searchLower = params.search.toLowerCase();
        centralsWithModels = centralsWithModels.filter(central => {
          const centralName = central.name.toLowerCase();
          const modelName = central.model?.name.toLowerCase() || '';
          return centralName.includes(searchLower) || modelName.includes(searchLower);
        });
      }

      if (params.modelId) {
        centralsWithModels = centralsWithModels.filter(
          central => central.modelId.toString() === params.modelId
        );
      }

      centralsWithModels.sort((a, b) => {
        const aValue = params.sortField === 'model'
          ? (a.model?.name || '')
          : a.name;
        const bValue = params.sortField === 'model'
          ? (b.model?.name || '')
          : b.name;

        return params.sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });

      const start = (params.page - 1) * params.pageSize;
      const end = start + params.pageSize;
      const items = centralsWithModels.slice(start, end);

      return {
        items,
        total: centralsWithModels.length,
      };
    },
    placeholderData: (prev) => prev,
  });

export const useModels = () =>
  useQuery<Model[]>({
    queryKey: ['models'],
    queryFn: async () => {
      const { data } = await api.get<Model[]>('/models');
      return data;
    },
  });

export const useDeleteCentral = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => api.delete(`/centrals/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['centrals'] });
    },
  });
};
