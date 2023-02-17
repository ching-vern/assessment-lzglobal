import { BrowserRouter, useLocation } from 'react-router-dom';
import Routing from './Routing';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-size: 14px;
        color: #0f0f0f
    }
 
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
