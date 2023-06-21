import React from "react";
import { Link } from "react-router-dom";
import { LoginCheckButtonStyle, SignUpIdPwSearchStyle } from "../../organisms/login/login.style";
import InputInCheckboxLabel from "../inputGroup/input-in-checkbox-label";

const BoxLoginCheckButtonView = () => {
  return (
    <LoginCheckButtonStyle>
      <InputInCheckboxLabel />

      <SignUpIdPwSearchStyle>
        <Link to="#">회원가입</Link>
        <Link to="#">아이디 찾기</Link>
      </SignUpIdPwSearchStyle>
    </LoginCheckButtonStyle>
  );
};
export default BoxLoginCheckButtonView;
