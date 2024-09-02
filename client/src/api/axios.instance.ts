import axios from "axios";

// const msgKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
const axiosDisasterInstance = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API_URL,
  headers: {
    "Content-Type": "application/json"
  },
  params: {
    numOfRows: 10,
    type: "json"
  }
});

export { axiosDisasterInstance, axiosInstance };
