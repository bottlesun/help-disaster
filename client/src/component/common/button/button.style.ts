import styled from "@emotion/styled";

export const CommonButtonStyle = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  background: var(--color-main);
  color: #fff;
  border: 1px solid var(--color-main);
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 700;
  font-size: 14px;
  min-width: 80px;
  min-height: 30px;

  :hover {
    background: var(--color-main-dark);
  }

  &.line {
    background: #fff;
    border: 1px solid var(--color-main);
    color: var(--color-main);
  }

  &.line:hover {
    background: var(--color-main-dark);
    color: #fff;
  }

  &.link {
    background: transparent;
    border: none;
    color: var(--color-main);
  }

  &.link:hover {
    color: var(--color-main-dark);
  }
`;

export const LinkButtonStyle = styled.div`
  min-width: 80px;
  min-height: 30px;
  a {
    padding: 8px 12px;
    display: block;
    font-size: 14px;
    width: 100%;
    height: 100%;
    text-align: center;
    color: var(--color-main);
    transition: all 0.2s;
    :hover {
      color: var(--color-main-dark);
    }
  }
`;

export const LoginButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 9999px;
  }
`;

export const TopButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-main-dark);
  transition: all 0.2s;
  width: 100%;
  height: 100%;
  * {
    color: var(--color-main-dark);
  }

  &:hover {
    color: var(--color-main);
    * {
      color: var(--color-main);
    }
  }
`;
