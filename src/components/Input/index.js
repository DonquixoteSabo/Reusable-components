import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  color: ${({ theme }) => theme.colors.gray3};
  display: flex;
  flex-direction: column;
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
`;

const Label = styled.label`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

// const HelperText = styled.small`
//   font-weight: normal;
//   font-size: 10px;
//   color: ${({ theme }) => theme.colors.gray3};
// `;

function Input(props) {
  return (
    <Form>
      <Label className='label' htmlFor='input'>
        {props.label}
      </Label>
      <StyledInput id='input' name='input' type='text' {...props} />
      {/* <HelperText>{props.helperText}</HelperText> */}
    </Form>
  );
}

export default Input;
