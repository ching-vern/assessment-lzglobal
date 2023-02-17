import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Routing from './Routing';

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
