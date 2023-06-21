import { LayoutStyle } from "@styles/layout.style";
import { LayoutProps } from "@type/layout.type";
import React from "react";
import FooterView from "../component/common/footer/footer.view";

const LoginLayoutView = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <div className={"login-inner"}>{children}</div>
      <FooterView brand={"HelpDisaster"} name={"BOTTLESUN"} />
    </LayoutStyle>
  );
};
export default LoginLayoutView;
