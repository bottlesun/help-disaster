import Header from "@/components/layout/Header";
import React from "react";
import Footer from "@/components/layout/Footer";
import { LayoutProps } from "@/types/layout.type";
import logo from "@/assets/images/logo.svg";
import { LayoutStyle } from "@/components/layout/@layout.style";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header brand={"HelpDisaster"} src={logo} />
      <main className={LayoutStyle}>{children}</main>
      <Footer brand={"HelpDisaster"} name={"BOTTLESUN"} />
    </>
  );
};

export default Layout;
