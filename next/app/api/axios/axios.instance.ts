import axios from "axios";

// const msgKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const axiosDisasterInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAIN_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosDisasterInstance, axiosInstance };
