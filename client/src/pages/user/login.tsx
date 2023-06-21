import { useLoginTestStore } from "@stores/useLoginTest.store";
import React from "react";
import { Navigate } from "react-router";
import Login from "../../component/organisms/login";
import LoginLayoutView from "../../layouts/loginLayout.view";

const LoginPage = () => {
  const { login } = useLoginTestStore();

  return (
    <>
      {login && <Navigate to="/" replace={true} />}
      <LoginLayoutView>
        <Login />
      </LoginLayoutView>
    </>
  );
};

export default LoginPage;
