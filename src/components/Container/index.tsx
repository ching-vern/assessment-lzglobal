import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
`;

const Container = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Container;
