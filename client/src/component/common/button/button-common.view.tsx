import React from "react";
import { CommonButtonStyle } from "./button.style";

type CommonButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonCommonView = ({ ...props }: CommonButtonProps) => {
  return <CommonButtonStyle {...props}>{props.text.toUpperCase()}</CommonButtonStyle>;
};
export default ButtonCommonView;
