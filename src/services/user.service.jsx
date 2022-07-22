import { axiosClient } from '../shared/constants';

export const useUserService = () => {
  const useLogin = async (user, pwd) => {
    return await axiosClient
      .post('login', {
        usuario: user,
        contraseña: pwd,
      })
      .then((response) => response.data);
  };

  return {
    useLogin,
  };
};
