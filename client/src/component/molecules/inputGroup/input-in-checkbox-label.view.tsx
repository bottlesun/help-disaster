import React from "react";
import InputCheckboxView from "../../atoms/input/input-checkbox.view";
import { CheckboxFieldStyle, InputGroupStyle } from "../../atoms/input/input.style";
import LabelTextView from "../../atoms/label/label-checkbox-text.view";
import { InputCommonViewProps } from "./input-in-text-label.view";

const InputInCheckboxLabelView = ({ input, id, label }: InputCommonViewProps) => {
  return (
    <InputGroupStyle>
      <CheckboxFieldStyle>
        <InputCheckboxView id={id} input={input} />
        <LabelTextView id={id} label={label} />
      </CheckboxFieldStyle>
    </InputGroupStyle>
  );
};

export default InputInCheckboxLabelView;
