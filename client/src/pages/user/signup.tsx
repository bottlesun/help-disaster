import React from "react";
import Signup from "../../component/organisms/signup";
import LoginLayoutView from "../../layouts/loginLayout.view";

const SignupPage = () => {
  return (
    <>
      <LoginLayoutView>
        <Signup />
      </LoginLayoutView>
    </>
  );
};

export default SignupPage;
