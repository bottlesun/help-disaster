import { LayoutStyle } from "@styles/layout.style";
import { LayoutProps } from "@type/layout.type";
import React from "react";
import FooterView from "../component/molecules/@common/footer.view";
import HeaderView from "../component/molecules/@common/header.view";

import logo from "../images/logo.svg";

const LayoutView = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <HeaderView brand={"HelpDisaster"} src={logo} />
      <div className={"inner"}>{children}</div>
      <FooterView brand={"HelpDisaster"} name={"BOTTLESUN"} />
    </LayoutStyle>
  );
};

export default LayoutView;
