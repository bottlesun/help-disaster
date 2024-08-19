import React from "react";
import { InputCommonViewProps } from "./input-in-text-label.view";
import {CheckboxFieldStyle, InputGroupStyle} from "../../common/input/input.style";
import InputCheckboxView from "../../common/input/input-checkbox.view";
import LabelTextView from "../../common/label/label-text.view";

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
