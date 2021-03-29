import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  h3 {
    color: #333;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 12px;
    margin-bottom: 15px;
  }
  .small-container {
    display: flex;
    div {
      margin-right: 40px;
    }
  }
`;
