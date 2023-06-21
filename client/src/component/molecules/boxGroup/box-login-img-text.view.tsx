import React from "react";
import BoxLoginTextView from "../../atoms/box/box-login-text.view";
import BoxLogoImgView from "../../atoms/box/box-logo-img.view";

const BoxLoginImgTextView = () => {
  return (
    <>
      <BoxLogoImgView />
      <BoxLoginTextView
        children={
          <p>
            안녕하세요! <br />
            재난 문자 알림 도우미 서비스 입니다.
          </p>
        }
        className={"login-text"}
      />
    </>
  );
};

export default BoxLoginImgTextView;
