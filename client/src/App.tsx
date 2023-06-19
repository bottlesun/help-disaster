import { Global } from "@emotion/react";
import React from "react";
import LayoutView from "./layouts/layout.view";
import {global} from "@styles/global";

function App() {
  return (
    <>
      <Global styles={global} />
      <LayoutView>
        <div>하이</div>
      </LayoutView>
    </>
  );
}

export default App;
