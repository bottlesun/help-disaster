import { axiosDisasterInstance, axiosInstance } from "../api/axios.instance";

export const fetcher = async (url: string) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const disasterFetcher = async (url: string) => {
  try {
    const res = await axiosDisasterInstance.get(url);
    return res.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const disasterScrollFetcher = async (url: string) => {
  try {
    const res = await axiosDisasterInstance.get(url);
    return res.data.DisasterMsg[1].row;
  } catch (error: any) {
    throw error.response.data;
  }
};
