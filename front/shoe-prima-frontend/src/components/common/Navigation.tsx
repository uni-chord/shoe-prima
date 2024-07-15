import {
  FavoriteBorder,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation: React.FC = () => {
  return (
    <>
      <StyledNavigation>
        <Logo to="/">LOGO</Logo>
        <MainMenu>
          <NavButton to="/products?filter=best">Best</NavButton>
          <NavButton to="/products?filter=new">New</NavButton>
          <NavButton to="/products?filter=men">Men</NavButton>
          <NavButton to="/products?filter=women">Women</NavButton>
          <NavButton to="/products?filter=kids">Kids</NavButton>
          <NavButton to="/products?filter=sale">Sale</NavButton>
        </MainMenu>
        <SubMenu>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <PersonOutline />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <IconButton>
            <ShoppingBagOutlined />
          </IconButton>
        </SubMenu>
      </StyledNavigation>
    </>
  );
};

export default Navigation;

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 3.75rem;

  padding: 0rem 3rem;

  background: var(--white--900, #fff);
  border-bottom: 1px solid var(--lightgray--300, #e5e5e5);
  z-index: 1000;
`;

const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.0625rem;
  height: 1.5rem;

  color: var(--black--900);
  text-decoration: none;
  font-feature-settings: 'calt' off;
  font-family: 'Gotham Black';
  font-size: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.01rem;
`;

const MainMenu = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  height: 3.75rem;

  padding: 0rem 0.75rem;

  color: var(--black--900);
  text-align: center;
  font-feature-settings: 'calt' off;
  text-decoration: none;

  /* body/body1/regular */
  font-family: Pretendard;
  font-size: var(--body--body1--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.01rem;

  /* 임의로 설정 */
  &:hover {
    color: var(--hover-color, #555);
  }
`;

const SubMenu = styled.ul`
  display: flex;
  gap: 0.25rem;
`;

const IconButton = styled.button`
  display: flex;

  padding: 0.375rem;

  background: none;
  border: none;

  cursor: pointer;

  svg {
    font-size: var(--title--title3--regular);
  }
`;
