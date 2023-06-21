import { Global } from "@emotion/react";
import Home from "@pages/home";
import LoginPage from "@pages/user/login";
import { globalStyle } from "@styles/global.style";
import React from "react";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
