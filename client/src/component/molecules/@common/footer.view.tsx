import { FooterStyle } from "@styles/layout.style";
import { FooterProps } from "@type/layout.type";
import React from "react";

const FooterView = ({ brand, name }: FooterProps) => {
  return (
    <FooterStyle>
      <p>&copy;{brand} All rights reserved.</p>
      <p>Create_by. {name ? name : brand} | var. {process.env.REACT_APP_VERSION}</p>
    </FooterStyle>
  );
};

export default FooterView;
