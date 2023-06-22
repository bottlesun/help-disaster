import { useLoginTestStore } from "@stores/useLoginTest.store";
import React from "react";
import { Navigate } from "react-router";
import Home from "../../component/organisms/home";
import LayoutView from "../../layouts/layout.view";

const HomePage = () => {
  const { login } = useLoginTestStore();
  return (
    <>
      {!login && <Navigate to="/login" replace={true} />}
      <LayoutView>
        <Home />
      </LayoutView>
    </>
  );
};
export default HomePage;
