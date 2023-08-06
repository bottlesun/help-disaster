import React, {useEffect} from "react";
import ButtonCommonView from "../../atoms/button/button-common.view";
import BoxLoginCheckButtonView from "../../molecules/boxGroup/box-login-check-button.view";
import InputLoginInTextLabel from "../../molecules/inputGroup/input-login-in-text-label";
import {AuthApi} from "../../../api/auth.api";
import useFormsHook, {Forms} from "@hooks/useForms.hook";
import {saveTokenToLocalStorage} from "@utils/helpers";
import {useNavigate} from "react-router";

const Login = () => {
  const AuthAPI = new AuthApi();
  const { forms, setForms } = useFormsHook();
  const navigate = useNavigate();
  /*
  * @name handleLogin
  * @description login api
  * */
  const handleLogin = async () => {
    const res = await AuthAPI.postLogin({username: forms.username, password: forms.password});
    console.log(res.data,"로그인");
    saveTokenToLocalStorage(res.data.accessToken);

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
    onForms:handleForms,
    forms
  }

  return (
    <>
      <InputLoginInTextLabel {...props}/>
      <BoxLoginCheckButtonView/>
      <ButtonCommonView onClick={handleLogin} style={{width: "100%", maxWidth: "280px"}} text={"로그인"}/>
    </>
  );
};
export default Login;
