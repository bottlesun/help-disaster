import React from "react";
import Home from "../../component/home";
import LayoutView from "../../layouts/layout.view";

const HomePage = () => {
  return (
    <>
      {/*{!login && <Navigate to="/login" replace={true} />}*/}
      <LayoutView children={<Home/>} />
    </>
  );
};
export default HomePage;
