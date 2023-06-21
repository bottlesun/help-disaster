import React from "react";
import InputInCheckboxLabelView from "./input-in-checkbox-label.view";

const InputInCheckboxLabel = () => {
  const inputProps = {
    checkboxProps: {
      id: "login-checkbox",
      input: {
        name: "checkbox"
      },
      label: {
        title: "아이디 저장"
      }
    }
  };

  return <InputInCheckboxLabelView {...inputProps.checkboxProps} />;
};

export default InputInCheckboxLabel;
