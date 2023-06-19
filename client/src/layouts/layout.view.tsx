import React, { JSX } from "react";
import {layout} from "@styles/layout";

type LayoutProps = {
  children?: JSX.Element;
};
const LayoutView = ({ children }: LayoutProps) => {
  return <div css={layout} className={"inner"}>{children}</div>;
};

export default LayoutView;
