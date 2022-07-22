import { Food } from '@pages/Food';
// import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { Profile } from '@pages/Profile';
import { Register } from '@pages/Register';
import { Statistics } from '@pages/Statistics';
import { Navigate, Route, Routes } from 'react-router-dom';

export const RoutesIndex = () => {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route index path="/" element={<Statistics />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="food" element={<Food />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
