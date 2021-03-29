import styled, { css } from 'styled-components';

const StyledButton = styled.button`
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

  ${props =>
    props.variant === 'outline' &&
    css`
      background-color: white;
      border: 1px solid #3d5afe;
      color: #3d5afe;
      &:hover,
      &:focus {
        background: rgba(41, 98, 255, 0.1);
      }
    `}
  ${props =>
    props.variant === 'text' &&
    css`
      background-color: white;
      border: none;
      color: #3d5afe;
      &:hover,
      &:focus {
        background: rgba(41, 98, 255, 0.1);
      }
    `}
    ${props =>
    props.disableShadow &&
    css`
      box-shadow: none;
    `}
    ${props =>
    props.disabled &&
    css`
      box-shadow: none;
      color: ${({ theme }) => theme.colors.silver};
    `}
    ${props =>
    props.size === 'sm' &&
    css`
      padding: ${({ theme }) => theme.buttonSizes.sm};
    `}
    ${props =>
    props.size === 'md' &&
    css`
      padding: ${({ theme }) => theme.buttonSizes.md};
    `}
    ${props =>
    props.size === 'lg' &&
    css`
      padding: ${({ theme }) => theme.buttonSizes.lg};
    `}
    ${props =>
    props.color === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `}
    ${props =>
    props.color === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
      }
    `}
    ${props =>
    props.color === 'danger' &&
    css`
      background-color: ${({ theme }) => theme.colors.danger};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.dangerHover};
      }
    `}
`;

function Button(props) {
  if (props.startIcon) {
    return (
      <StyledButton {...props}>
        <span className='material-icons'>{props.startIcon}</span>
        {props.children}
      </StyledButton>
    );
  }
  if (props.endIcon) {
    return (
      <StyledButton {...props}>
        {props.children} <span className='material-icons'>{props.endIcon}</span>
      </StyledButton>
    );
  }
  return <StyledButton {...props} />;
}

export default Button;
