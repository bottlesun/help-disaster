import React from "react";
import Home from "../../component/organisms/home";
import LayoutView from "../../layouts/layout.view";

const HomePage = () => {
  return (
    <>
      {/*{!login && <Navigate to="/login" replace={true} />}*/}
      <LayoutView>
        <Home />
      </LayoutView>
    </>
  );
};
export default HomePage;
