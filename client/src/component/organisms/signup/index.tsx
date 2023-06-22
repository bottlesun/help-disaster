import React from "react";
import ButtonCommonView from "../../atoms/button/button-common.view";
import BoxSignupImgTextView from "../../molecules/boxGroup/box-signup-img-text.view";
import InputSigninInTextLabel from "../../molecules/inputGroup/input-signup-in-text-label";
import { LoginContainerStyle } from "../login/login.style";

const Signup = () => {
  return (
    <LoginContainerStyle>
      <BoxSignupImgTextView />

      <InputSigninInTextLabel />

      <ButtonCommonView style={{ width: "100%", maxWidth: 280 }} text={"회원가입"} />
    </LoginContainerStyle>
  );
};
export default Signup;
