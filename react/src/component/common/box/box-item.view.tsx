import React from "react";
import { ItemBoxStyle } from "./box.style";

type BoxItemViewProps = {
  children?: React.ReactNode;
};

const BoxItemView = ({ children }: BoxItemViewProps) => {
  return <ItemBoxStyle>{children}</ItemBoxStyle>;
};

export default BoxItemView;
