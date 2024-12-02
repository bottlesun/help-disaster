import React from "react";
import Footer from "@/_components/layout/Footer";
import { LayoutProps } from "@/_types/layout.type";
import { LayoutStyle } from "@/_components/layout/layout.style";

const LayoutAuth = ({ children }: LayoutProps) => {
  return (
    <div className={LayoutStyle}>
      <main className={"inner"}>{children}</main>
      <Footer brand={"HelpDisaster"} name={"BOTTLESUN"} />
    </div>
  );
};

export default LayoutAuth;
