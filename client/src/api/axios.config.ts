import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";


export const axiosErrorExceptionAsync = (error: unknown): Promise<AxiosResponse<unknown, any>> => {
  const { response, request, message, config } = error as AxiosError;

  if (response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(response.data);
    console.log(response.status);
    console.log(response.headers);
  } else if (request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", message);
  }

  console.log(config);

  return new Promise((resolve: (value: AxiosResponse<unknown, any>) => void): void => {
    resolve(response as AxiosResponse<unknown, any>);
  });
};

export abstract class AxiosConfig {
  protected instance: AxiosInstance;
  protected token?: string;
  protected readonly baseURL: string;

  protected constructor( token?: string) {
    this.baseURL =  process.env.REACT_APP_API_URL || "";

    this.instance = axios.create({
      baseURL: this.baseURL
    });
    this.token = token;
    this.interceptor();
  }
  private interceptor = (): void => {
    this.instance.interceptors.request.use(this.request);
  };

  private request = (config: AxiosRequestConfig): any => {
    this.token && (config.headers!["Authorization"] = `Bearer ${this.token}`);

    return config;
  }
}
