import Header from "@/_components/layout/Header";
import React from "react";
import Footer from "@/_components/layout/Footer";
import { LayoutProps } from "@/_types/layout.type";
import logo from "@/_assets/images/logo.svg";
import { LayoutStyle } from "@/_components/layout/layout.style";

const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <div className={LayoutStyle}>
      <Header brand={"HelpDisaster"} src={logo} />
      <main className={"inner"}>{children}</main>
      <Footer brand={"HelpDisaster"} name={"BOTTLESUN"} />
    </div>
  );
};

export default LayoutPage;
