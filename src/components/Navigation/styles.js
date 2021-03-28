import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
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
export const List = styled.ul`
  margin-top: 60px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.silver};
`;
export const Item = styled.li`
  padding: 10px 5px;
`;
export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.silver};
`;
