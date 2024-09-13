import { LogoStyle } from "@styles/layout.style";
import { HeaderProps } from "@type/layout.type";
import React from "react";
import { Link } from "react-router-dom";

const BoxLogoView = ({ src, brand }: HeaderProps) => {
  return (
    <LogoStyle>
      <h1>
        <Link to="/">{src ? <img src={src} alt={brand} /> : brand}</Link>
      </h1>
    </LogoStyle>
  );
};

export default BoxLogoView;
