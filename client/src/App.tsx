import { Global } from "@emotion/react";
import { layout } from "@styles/layout";
import React from "react";
import LayoutView from "./layouts/layout.view";

function App() {
  return (
    <>
      <Global styles={layout} />
      <LayoutView>
        <div>하이</div>
      </LayoutView>
    </>
  );
}

export default App;
