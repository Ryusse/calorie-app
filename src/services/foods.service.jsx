import { axiosClient } from '../shared/constants';

export const useFoodService = () => {
  const useGetFoods = async () => {
    return await axiosClient
      .get('alimento/listar')
      .then((response) => response.data);
  };

  return {
    useGetFoods,
  };
};
