import React from "react";
import { InputCommonViewProps } from "../../group/inputGroup/input-in-text-label.view";
import { CheckboxStyle } from "./input.style";

const InputCheckboxView = ({ input, id }: InputCommonViewProps) => {
  return <CheckboxStyle type={"checkbox"} id={id} data-error={input?.error} {...input} />;
};

export default InputCheckboxView;
