import React from "react";
import { InputCommonViewProps } from "../../molecules/inputGroup/input-in-text-label.view";
import { CheckboxLabelStyle } from "../input/input.style";

const LabelTextView = ({ label, id }: InputCommonViewProps) => {
  return (
    <CheckboxLabelStyle htmlFor={id} {...label}>
      {label?.title}
    </CheckboxLabelStyle>
  );
};

export default LabelTextView;
