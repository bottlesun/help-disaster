import React, { JSX } from "react";

type LayoutProps = {
  children?: JSX.Element;
};
const LayoutView = ({ children }: LayoutProps) => {
  return <main className={"inner"}>{children}</main>;
};

export default LayoutView;
