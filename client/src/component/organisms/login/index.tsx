import React from "react";
import ButtonCommonView from "../../atoms/button/button-common.view";
import BoxLoginCheckButtonView from "../../molecules/boxGroup/box-login-check-button.view";
import BoxLoginImgTextView from "../../molecules/boxGroup/box-login-img-text.view";
import InputLoginInTextLabel from "../../molecules/inputGroup/input-login-in-text-label";
import { LoginContainerStyle } from "./login.style";

const Login = () => {
  return (
    <LoginContainerStyle>
      <BoxLoginImgTextView />
      <InputLoginInTextLabel />
      <BoxLoginCheckButtonView />
      <ButtonCommonView style={{ width: "100%", maxWidth: "280px" }} text={"로그인"} />
    </LoginContainerStyle>
  );
};
export default Login;
