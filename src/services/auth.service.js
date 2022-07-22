import { apiBaseAuth } from '@/constants';

export const useAuthService = () => {
  const login = async (body) => {
    return await apiBaseAuth.post('/authenticate', body);
  };

  const register = async (body) => {
    return await apiBaseAuth.post('/authenticate/register', body);
  };

  return {
    login,
    register,
  };
};
