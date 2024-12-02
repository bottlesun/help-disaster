import Header from "@/_components/layout/Header";
import React from "react";
import { LayoutProps } from "@/_types/layout.type";
import logo from "@/_assets/images/logo.svg";
import { LayoutStyle } from "@/_components/layout/layout.style";

const LayoutNotfound = ({ children }: LayoutProps) => {
  return (
    <div className={LayoutStyle}>
      <Header brand={"HelpDisaster"} src={logo} />
      <main className={"inner"}>{children}</main>
    </div>
  );
};

export default LayoutNotfound;
