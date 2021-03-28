import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.default};
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.buttonSizes.md};
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.defaultHover};
  }
`;

export default Button;
