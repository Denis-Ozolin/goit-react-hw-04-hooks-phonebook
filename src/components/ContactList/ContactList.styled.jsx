import styled from '@emotion/styled';

export const List = styled.ul`
  width: 424px;
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & p{
      color: azure;
    }

    & button {
      width: 100px;
      padding: 8px 16px;
      background-color: slategrey;
      border-color: azure;
      color: azure;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    & button:hover{
      background-color: tomato;
    }
  }
`;
