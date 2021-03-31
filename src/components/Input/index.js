import React from 'react';
import styled, { css } from 'styled-components';

const Group = styled.div`
  color: ${({ theme }) => theme.colors.gray3};
  display: flex;
  flex-direction: column;
  label {
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  &:focus-within {
    .color {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

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

const StyledInput = styled.input`
  width: 200px;
  height: 56px;
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
    props.error &&
    css`
      background: #f2f2f2;

      border: 1px solid ${({ theme }) => theme.colors.default};
    `}
`;

const HelperText = styled.small`
  font-weight: normal;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray3};
`;

function Input(props) {
  return (
    <Group error={props.error}>
      <label className='color' htmlFor='input'>
        {props.label}
      </label>
      <StyledInput id='input' name='input' type='text' {...props} />
      <HelperText className='color'>{props.helperText}</HelperText>
    </Group>
  );
}

export default Input;
