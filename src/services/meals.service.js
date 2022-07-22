import { axiosClient } from '../shared/constants';

export const useMealService = () => {
  const useGetMeals = async (idUsuario) => {
    return await axiosClient
      .get(`comida/listar/${idUsuario}`)
      .then((response) => response.data);
  };

  const useCreateMeal = async (tipoComida, idAlimento, idUsuario, fechaRegistro) => {
    return await axiosClient
      .post('comida/registrar',{
        "tipoComida": tipoComida,
        "idAlimento": idAlimento,
        "idUsuario": idUsuario,
        "fechaRegistro": fechaRegistro
      })
      .then((response) => response.data);
  };
  return {
    useGetMeals,
    useCreateMeal,
  };
};
