import React from "react";
import { InputCommonViewProps } from "../../molecules/inputGroup/input-in-text-label.view";
import { TextLabelStyle } from "../input/input.style";

const LabelTextView = ({ label, id }: InputCommonViewProps) => {
  return (
    <TextLabelStyle htmlFor={id} {...label}>
      {label?.title}
    </TextLabelStyle>
  );
};

export default LabelTextView;
