import { useLoginTestStore } from "@stores/useLoginTest.store";
import { HeaderStyle } from "@styles/layout.style";
import { HeaderProps } from "@type/layout.type";
import React from "react";
import BoxLogoView from "../boxGroup/box-logo.view";
import ButtonLoginView from "../buttonGroup/button-login.view";

const HeaderView = ({ brand, src }: HeaderProps) => {
  const { login } = useLoginTestStore();

  return (
    <HeaderStyle>
      <BoxLogoView brand={brand} src={src} />
      <ButtonLoginView login={login} />
    </HeaderStyle>
  );
};

export default HeaderView;
