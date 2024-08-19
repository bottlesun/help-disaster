import React from "react";
import BoxSignupImgTextView from "../group/boxGroup/box-signup-img-text.view";
import InputSigninInTextLabel from "../group/inputGroup/input-signup-in-text-label";
import { LoginContainerStyle } from "../login/login.style";
import ButtonCommonView from "../common/button/button-common.view";

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
