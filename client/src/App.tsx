import { Global } from "@emotion/react";
import Error404 from "@pages/error404";
import HomePage from "@pages/home";
import LoginPage from "@pages/user/login";
import SignupPage from "@pages/user/signup";
import { globalStyle } from "@styles/global.style";
import React from "react";
import { Route, Routes } from "react-router";
import {checkTokenExpiration} from "@utils/helpers";

function App() {
  checkTokenExpiration();

  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="help-disaster/build/" element={<HomePage />} />
        <Route path="help-disaster/build/*" element={<Error404 />} />
        <Route path="help-disaster/build/login" element={<LoginPage />} />
        <Route path="help-disaster/build/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
