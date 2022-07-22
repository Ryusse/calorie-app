import { axiosClient } from '../shared/constants';

export const useFoodService = () => {
  const useGetFoods = async () => {
    return await axiosClient
      .get('alimento/listar')
      .then((response) => response.data);
  };

  const useCreateFood = async () => {
    return await axiosClient
      .post('alimento/registrar')
      .then((response) => response.data);
  };

  const useUpdateFood = async () => {
    return await axiosClient
      .post('alimento/actualizar')
      .then((response) => response.data);
  };

  return {
    useGetFoods,
    useCreateFood,
    useUpdateFood,
  };
};
