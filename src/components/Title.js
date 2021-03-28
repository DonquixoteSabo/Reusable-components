import styled from 'styled-components';

const Title = styled.header`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
`;

export default Title;
