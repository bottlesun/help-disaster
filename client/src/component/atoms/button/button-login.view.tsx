import gravatar from "gravatar";
import React from "react";
import ButtonLinkView from "./button-link.view";
import { LoginButtonStyle } from "./button.style";

type ButtonLoginProps = {
  login?: boolean;
};
const ButtonLoginView = ({ login }: ButtonLoginProps) => {
  const userData = {
    nickname: "test"
  };

  return (
    <>
      {
        // 로그인
        login ? (
          <LoginButtonStyle>
            <img src={gravatar.url(userData.nickname, { s: "30px", d: "retro" })} alt={userData.nickname} />
            <ButtonLinkView text={"로그아웃"} />
          </LoginButtonStyle>
        ) : (
          <ButtonLinkView link={"/login"} text={"로그인"} />
        )
      }
    </>
  );
};

export default ButtonLoginView;
