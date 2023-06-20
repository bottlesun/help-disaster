import { HeaderProps } from "@type/layout.type";
import React from "react";

const LogoView = ({ src, brand }: HeaderProps) => {
  return (
    <h1>
      <a href="/">{src ? <img src={src} alt={brand} /> : brand}</a>
    </h1>
  );
};

export default LogoView;
