import React from "react";
import { InputCommonViewProps } from "../../group/inputGroup/input-in-text-label.view";
import { CommonInputStyle } from "./input.style";

const InputCommonView = ({ input, id }: InputCommonViewProps) => {
  return <CommonInputStyle id={id} data-error={input?.error} {...input} />;
};
export default InputCommonView;
