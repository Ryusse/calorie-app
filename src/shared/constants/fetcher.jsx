import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: `https://apialimentostic.azurewebsites.net/api/`,
});
