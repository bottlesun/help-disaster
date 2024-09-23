import { AxiosConfig, axiosErrorExceptionAsync } from "./axios.config";
import { AxiosResponse } from "_utils";

export class AuthApi extends AxiosConfig {
  private _url = `/auth`;

  constructor(token?: string) {
    super(token);
  }

  public postLogin = async (request: loginRequest): Promise<AxiosResponse<loginRequest, any> | AxiosResponse<any, any>> => {
    try {
      return await this.instance.post<loginResponse | any>(`${this._url}/login`, {
        username: request.username,
        password: request.password
      });
    } catch (error: unknown) {
      return axiosErrorExceptionAsync(error);
    }
  };

  public getProfile = async (): Promise<AxiosResponse<loginRequest, any> | AxiosResponse<any, any>> => {
    try {
      return await this.instance.get<loginResponse | any>(`${this._url}/profile`);
    } catch (error: unknown) {
      return axiosErrorExceptionAsync(error);
    }
  };
}

type loginRequest = {
  username: string;
  password: string;
};

type loginResponse = {
  accessToken: string;
};
