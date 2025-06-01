import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
});

interface CentralsParams {
  page: number;
  pageSize: number;
  sortField: string;
  sortOrder: string;
  search: string;
}

interface Central {
  id: number;
  name: string;
  mac: string;
  modelId: number;
}

interface Model {
  id: number;
  name: string;
}

interface CentralsResponse {
  items: Central[];
  total: number;
}

export const useCentrals = (params: CentralsParams) =>
  useQuery<CentralsResponse>({
    queryKey: ['centrals', params],
    queryFn: async () => {
      const { data: allCentrals } = await api.get<Central[]>('/centrals');
      
      let filteredCentrals = allCentrals;
      if (params.search) {
        filteredCentrals = allCentrals.filter(central =>
          central.name.toLowerCase().includes(params.search.toLowerCase())
        );
      }
      
      filteredCentrals.sort((a, b) => {
        const aValue = params.sortField === 'name' ? a.name : a.modelId.toString();
        const bValue = params.sortField === 'name' ? b.name : b.modelId.toString();
        
        if (params.sortOrder === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
      
      const start = (params.page - 1) * params.pageSize;
      const end = start + params.pageSize;
      const items = filteredCentrals.slice(start, end);
      
      return {
        items,
        total: filteredCentrals.length,
      };
    },
    placeholderData: (previousData) => previousData,
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