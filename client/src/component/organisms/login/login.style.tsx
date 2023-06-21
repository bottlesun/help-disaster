import styled from "@emotion/styled";

export const LoginContainerStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  min-width: 320px;
  width: 100%;
  height: 520px;

  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  > div:nth-of-type(2) {
    // input 창
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    fieldset {
      flex-shrink: 0;
      width: 100%;
    }
  }

  .logo-img {
    width: 260px;
    margin-bottom: 40px;
  }

  .login-text {
    max-width: 280px;
    width: 100%;
    p {
      font-size: 14px;
      line-height: 20px;
      text-align: left;
      color: var(--color-text-blue);
      margin-bottom: 10px;
      letter-spacing: -0.05rem;
    }
  }
`;

export const SignUpIdPwSearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
  a {
    font-size: 12px;
    color: var(--color-text-blue);
    text-decoration: underline !important;
    margin-bottom: 22px;
  }
`;

export const LoginCheckButtonStyle = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
