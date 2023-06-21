import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import InputCommonView from "../../atoms/input/input-common.view";
import LabelTextView from "../../atoms/label/label-text.view";

export type InputCommonViewProps = {
  id: string;
  input?: InputHTMLAttributes<HTMLInputElement> & { error?: boolean };
  label?: LabelHTMLAttributes<HTMLLabelElement>;
};
const InputInTextLabelView = ({ input, label, id }: InputCommonViewProps) => {
  return (
    <fieldset className={!label?.title ? "no-label" : ""}>
      <InputCommonView id={id} data-error={input?.error} input={input} />
      <LabelTextView id={id} label={label} />
    </fieldset>
  );
};
export default InputInTextLabelView;
