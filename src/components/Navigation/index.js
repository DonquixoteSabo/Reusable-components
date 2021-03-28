import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  header {
    margin: 30px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.l};
    span {
      color: #f7542e;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};

  .selected {
    color: #090f31;
  }
`;
const List = styled.ul`
  margin-top: 60px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.silver};
`;
const Item = styled.li`
  padding: 10px 5px;
`;
const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.silver};
`;

const navItems = [
  {
    content: 'Colors',
    path: 'colors',
  },
  {
    content: 'Typography',
    path: 'typography',
  },
  {
    content: 'Spaces',
    path: 'spaces',
  },
  {
    content: 'Buttons',
    path: 'buttons',
  },
  {
    content: 'Inputs',
    path: 'inputs',
  },
  {
    content: 'Grid',
    path: 'grid',
  },
];

function Navigation() {
  return (
    <Nav>
      <StyledLink to="">
        <header>
          <span>Reusable</span> Components!
        </header>
      </StyledLink>

      <List>
        {navItems.map(item => (
          <Item key={item.path}>
            <StyledLink to={`/${item.path}`} activeClassName="selected">
              {item.content}
            </StyledLink>
          </Item>
        ))}
      </List>
    </Nav>
  );
}

export default Navigation;
