import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 320px;
    margin-bottom: 20px;
  }

  & input {
    width: 204px;
    padding: 10px;
  }

  & button {
    margin-bottom: 20px;
    padding: 8px 16px;
    background-color: slategrey;
    color: azure;
    font-size: 18px;
    border-color: azure;
    cursor: pointer;
    transition: background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);

  }

  & button:hover{
    background-color: #24bd57;
  }
`;
