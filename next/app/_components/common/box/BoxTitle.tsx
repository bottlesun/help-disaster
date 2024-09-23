import { ItemTitle } from "@/_components/common/box/box.style";
import React from "react";

interface BoxTitleProps {
  children?: React.ReactNode;
  text?: string;
}

const BoxTitle = ({ children, text }: BoxTitleProps) => {
  return <h3 className={ItemTitle}>{children || text}</h3>;
};

export default BoxTitle;
