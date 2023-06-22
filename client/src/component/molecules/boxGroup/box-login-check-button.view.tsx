import React from "react";
import { Link } from "react-router-dom";
import { LoginCheckButtonStyle, SignUpIdPwSearchStyle } from "../../organisms/login/login.style";
import InputLoginInCheckboxLabel from "../inputGroup/input-login-in-checkbox-label";

const BoxLoginCheckButtonView = () => {
  return (
    <LoginCheckButtonStyle>
      <InputLoginInCheckboxLabel />

      <SignUpIdPwSearchStyle>
        <Link to="/signup">회원가입</Link>
        <Link to="#">아이디 찾기</Link>
      </SignUpIdPwSearchStyle>
    </LoginCheckButtonStyle>
  );
};
export default BoxLoginCheckButtonView;
