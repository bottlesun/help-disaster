import React, { useState } from "react";
import { InputGroupStyle } from "../../atoms/input/input.style";
import InputInTextLabelView from "./input-in-text-label.view";

const InputLoginInTextLabel = () => {
  const [value, setValue] = useState({ id: "", password: "" });

  const handleLoginChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setValue({ ...value, [event.target.name]: event.target.value });
    event.target.value.toString().length !== 0 ? event.target.classList.add("input-focus") : event.target.classList.remove("input-focus");
    // onInputChange(event);
  };

  const inputProps = {
    idProps: {
      id: "login-id",
      input: {
        type: "text",
        error: false,
        value: value.id,
        name: "id",
        onChange: handleLoginChange
      },
      label: {
        title: "ID"
      }
    },
    passwordProps: {
      id: "login-password",
      input: {
        type: "password",
        name: "password",
        value: value.password,
        onChange: handleLoginChange
      },
      label: {
        title: "PASSWORD"
      }
    }
  };
  return (
    <InputGroupStyle className={"input-group"}>
      <InputInTextLabelView {...inputProps.idProps} />
      <InputInTextLabelView {...inputProps.passwordProps} />
    </InputGroupStyle>
  );
};

export default InputLoginInTextLabel;
