import { Route, Routes } from 'react-router-dom';

import Container from './components/Container';
import Home from './pages/home';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Routing;
