import React from "react";
import BoxLogoImgView from "../../common/box/box-logo-img.view";
import BoxLoginTextView from "../../common/box/box-login-text.view";

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
