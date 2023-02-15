import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/home';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routing;
