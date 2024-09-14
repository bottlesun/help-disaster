import React from "react";
import Signup from "../../component/signup";
import LoginLayoutView from "../../layouts/loginLayout.view";

const SignupPage = () => {
  return <LoginLayoutView children={<Signup />} />;
};

export default SignupPage;
