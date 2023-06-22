import React from "react";
import BoxLogoImgView from "../../atoms/box/box-logo-img.view";
import { SignupTitleStyle } from "../../organisms/signup/signup.style";

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
