import { useLoginTestStore } from "@stores/useLoginTest.store";
import React from "react";
import { Navigate } from "react-router";
import LoginLayoutView from "../../layouts/loginLayout.view";

const Login = () => {
  const { login } = useLoginTestStore();

  return (
    <>
      {login && <Navigate to="/" replace={true} />}
      <LoginLayoutView>로그인</LoginLayoutView>;
    </>
  );
};

export default Login;
