import { axiosClient } from '../shared/constants';

export const useReportService = () => {
  const useGetReport = async (userId) => {
    return await axiosClient
      .get(
        `https://apialimentostic.azurewebsites.net/api/reporte/caloriasconsumidas/1`
      )
      .then((response) => response.data);
  };

  return {
    useGetReport,
  };
};
