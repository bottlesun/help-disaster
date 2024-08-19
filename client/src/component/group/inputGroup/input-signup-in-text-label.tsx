import React, { useState } from "react";
import InputInTextLabelView from "./input-in-text-label.view";
import {InputGroupStyle} from "../../common/input/input.style";

const InputSigninInTextLabel = () => {
  const [value, setValue] = useState({ id: "", password: "", name: "", repassword: "" });

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
        title: "아이디"
      }
    },
    nameProps: {
      id: "login-name",
      input: {
        type: "text",
        error: false,
        value: value.name,
        name: "name",
        onChange: handleLoginChange
      },
      label: {
        title: "닉네임"
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
        title: "비밀번호"
      }
    },
    rePasswordProps: {
      id: "login-rePasswordProps",
      input: {
        type: "password",
        name: "rePasswordProps",
        value: value.password,
        onChange: handleLoginChange
      },
      label: {
        title: "비밀번호를 다시 입력해주세요."
      }
    }
  };
  return (
    <InputGroupStyle className={"input-group"}>
      <InputInTextLabelView {...inputProps.idProps} />
      <InputInTextLabelView {...inputProps.nameProps} />
      <InputInTextLabelView {...inputProps.passwordProps} />
      <InputInTextLabelView {...inputProps.rePasswordProps} />
    </InputGroupStyle>
  );
};

export default InputSigninInTextLabel;
