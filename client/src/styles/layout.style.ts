import styled from "@emotion/styled";

export const LayoutStyle = styled.div`
  max-width: 960px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 15px;
  .inner {
    min-height: calc(100vh - 80px);
    padding: 30px 50px;
    border: 1px solid red;
    color: var(--color-text-blue);
  }
`;

export const HeaderStyle = styled.header`
  height: 80px;
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: inline-block;
    color: var(--color-main);
    font-size: 25px;
    font-weight: 700;
  }
`;

export const FooterStyle = styled.footer`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  p {
    margin: 0;
    text-align: center;
    font-weight: 700;
    font-size: 11px;
  }
`;
