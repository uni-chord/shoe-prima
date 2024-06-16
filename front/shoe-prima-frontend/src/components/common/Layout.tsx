import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Navigation />
      <Pages>
        <Outlet />
      </Pages>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const Pages = styled.div`
  box-sizing: border-box;
  max-width: 1280px;
  width: 100%;

  padding: 2.5rem;
`;
