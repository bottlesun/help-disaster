import { LogoStyle } from "@styles/layout.style";
import { HeaderProps } from "@type/layout.type";
import React from "react";

const BoxLogoView = ({ src, brand }: HeaderProps) => {
  return (
    <LogoStyle>
      <h1>
        <a href="/client/public">{src ? <img src={src} alt={brand} /> : brand}</a>
      </h1>
    </LogoStyle>
  );
};

export default BoxLogoView;
