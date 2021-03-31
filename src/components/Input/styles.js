import styled, { css } from 'styled-components';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.fontSize.xs};
  small {
    font-size: 10px;
  }
  &:focus-within {
    .color {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .container {
    position: relative;
    width: ${props => (props.fullWidth ? '100%' : '200px')};
    height: 56px;
    display: flex;
    align-items: center;
    span {
      position: absolute;
      &.start {
        left: 5px;
      }
      &.end {
        right: 5px;
      }
    }
    /*SIZE */
    ${props =>
      props.size === 'sm' &&
      css`
        width: 200px;
        height: 40px;
      `}
  }

  /*ERROR*/
  ${props =>
    props.error &&
    css`
      &:focus-within {
        .color {
          color: ${({ theme }) => theme.colors.danger};
        }
      }
    `}
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  font-family: 'Noto Sans JP', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
  outline: none;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray1};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  ${props =>
    props.error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.danger};
      }
    `}

  ${props =>
    props.disabled &&
    css`
      background: #f2f2f2;
      border: 1px solid ${({ theme }) => theme.colors.default};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.default};
      }
    `}

    ${props =>
    (props.startIcon || props.endIcon) &&
    css`
      text-indent: 20px;
    `};
`;
