// import { Home } from '@pages/Home'

import { Food, Statistics, Register } from '@pages/';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

export const RoutesIndex = () => {
  return (
    <HashRouter>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="Statistics" element={<Statistics />} />
      <Route path="Food" element={<Food />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </HashRouter>
  );
};
