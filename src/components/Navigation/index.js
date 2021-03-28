import { Nav, StyledLink, List, Item } from './styles';
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
      <StyledLink to='/'>
        <header>
          <span>Reusable</span> Components!
        </header>
      </StyledLink>

      <List>
        {navItems.map(({ path, content }) => (
          <Item key={path}>
            <StyledLink to={`/${path}`}>{content}</StyledLink>
          </Item>
        ))}
      </List>
    </Nav>
  );
}

export default Navigation;
