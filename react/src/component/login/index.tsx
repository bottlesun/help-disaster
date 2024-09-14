import React from "react";
import BoxLoginCheckButtonView from "../group/boxGroup/box-login-check-button.view";
import InputLoginInTextLabel from "../group/inputGroup/input-login-in-text-label";
import { AuthApi } from "../../api/auth.api";
import useFormsHook, { Forms } from "@hooks/useForms.hook";
import { saveTokenToLocalStorage } from "@utils/helpers";
import { useNavigate } from "react-router";
import ButtonCommonView from "../common/button/button-common.view";

const Login = () => {
  const AuthAPI = new AuthApi();
  const { forms, setForms } = useFormsHook();
  const navigate = useNavigate();
  /*
   * @name handleLogin
   * @description login api
   * */
  const handleLogin = async () => {
    const res = await AuthAPI.postLogin({ username: forms.username, password: forms.password });
    if (!res) return alert("아이디 또는 비밀번호를 확인해주세요.");
    const { accessToken } = res.data;
    if (!accessToken) return alert("토큰이 없습니다.");
    saveTokenToLocalStorage(accessToken as string);

    return navigate("/");
  };

  /*
   * @name handleForms
   * @description input value change
   * */
  const handleForms = (key: string, value: any): void => {
    setForms((state: Forms) => {
      state[key] = value;
      return state;
    });
  };

  const props = {
    onForms: handleForms,
    forms
  };

  return (
    <>
      <InputLoginInTextLabel {...props} />
      <BoxLoginCheckButtonView />
      <ButtonCommonView onClick={() => handleLogin} style={{ width: "100%", maxWidth: "280px" }} text={"로그인"} />
    </>
  );
};
export default Login;
