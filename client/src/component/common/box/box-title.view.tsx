import { ReactNode } from "react";
import { ItemTitleStyle } from "./box.style";

type BoxTitleViewProps = {
  children?: ReactNode;
};
const BoxTitleView = ({ children }: BoxTitleViewProps) => {
  return <ItemTitleStyle>{children}</ItemTitleStyle>;
};

export default BoxTitleView;
