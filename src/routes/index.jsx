import { Food } from '@pages/Food';
import { Login } from '@pages/Login';
import { Statistics } from '@pages/Statistics';
import { Navigate, Route, Routes } from 'react-router-dom';

export const RoutesIndex = () => {
  return (
    <Routes>
      <Route index path="/" element={<Statistics />} />
      <Route path="login" element={<Login />} />
      <Route path="food" element={<Food />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
