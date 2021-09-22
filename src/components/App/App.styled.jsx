import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const AppTitle = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 2000ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{
    color: #24bd57;
  }
`;
