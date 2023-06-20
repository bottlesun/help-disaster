import { LayoutStyle } from "@styles/layout.style";
import { LayoutProps } from "@type/layout.type";
import React from "react";
import FooterView from "../component/common/footer/footer.view";
import HeaderView from "../component/common/header/header.view";

const LayoutView = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <HeaderView brand={"HelpDisaster"} />
      <div className={"inner"}>{children}</div>
      <FooterView brand={"HelpDisaster"} name={"BOTTLESUN"} />
    </LayoutStyle>
  );
};

export default LayoutView;
