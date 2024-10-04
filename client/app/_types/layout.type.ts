import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

export type HeaderProps = {
  brand: string;
  src?: string;
};

export type FooterProps = {
  brand: string;
  name?: string;
};
