import React from "react";
import { SignupTitleStyle } from "../../signup/signup.style";
import BoxLogoImgView from "../../common/box/box-logo-img.view";

const BoxSignupImgTextView = () => {
  return (
    <>
      <BoxLogoImgView />

      <SignupTitleStyle>
        <h2>회원가입</h2>
      </SignupTitleStyle>
    </>
  );
};

export default BoxSignupImgTextView;
