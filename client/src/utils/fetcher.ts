import axios, {AxiosHeaders, AxiosHeaderValue} from "axios";

const axiosHeader = {
  'Content-Type': 'application/json',
};


export const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const scrollFetcher = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data.DisasterMsg[1].row;
  } catch (error: any) {
    throw error.response.data;
  }
};
