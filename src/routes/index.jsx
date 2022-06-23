// import { Home } from '@pages/Home'

import { Food, Register, Statistics } from '@pages/';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { Profile } from '@pages/Profile';
import { Navigate, Route, Routes } from 'react-router-dom';

export const RoutesIndex = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="statistics" element={<Statistics />} />
      <Route path="food" element={<Food />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
