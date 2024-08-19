import styled from "@emotion/styled";

export const PaginationContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 50px;
  gap:5px;
`

export const PaginationButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  height: 35px;
  min-width:40px;
  background: var(--color-main);
  color:#fff;
  font-size: 12px;
  transition: all 0.3s ease;
  padding: 5px 10px;
  
  &.active{
    background: var(--color-main-dark);
  }
  &:hover{
    background: var(--color-main-leight-dark);
  }
  
  *{
    color: #fff;
  }
`;
