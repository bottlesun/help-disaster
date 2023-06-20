import { useLoginTestStore } from "@stores/useLoginTest.store";
import { HeaderStyle } from "@styles/layout.style";
import { HeaderProps } from "@type/layout.type";
import React from "react";
import LogoView from "../../atoms/box/logo.view";
import ButtonLoginView from "../../atoms/button/button-login.view";

const HeaderView = ({ brand, src }: HeaderProps) => {
  const { login } = useLoginTestStore();

  return (
    <HeaderStyle>
      <LogoView brand={brand} src={src} />
      <ButtonLoginView login={login} />
    </HeaderStyle>
  );
};

export default HeaderView;
