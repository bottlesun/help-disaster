import {useLoginTestStore} from "@stores/useLoginTest.store";
import React, {useEffect} from "react";
import {Navigate} from "react-router";
import Login from "../../component/organisms/login";
import LoginLayoutView from "../../layouts/loginLayout.view";
import BoxLoginImgTextView from "../../component/molecules/boxGroup/box-login-img-text.view";
import {LoginContainerStyle} from "../../component/organisms/login/login.style";

const LoginPage = () => {
  const login = localStorage.getItem("access-token");

  return (
    <>
      {login && <Navigate to="/" replace={true}/>}
      <LoginLayoutView>
        <LoginContainerStyle>
          <BoxLoginImgTextView/>
          <Login/>
        </LoginContainerStyle>
      </LoginLayoutView>
    </>
  );
};

export default LoginPage;
