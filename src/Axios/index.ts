import axios, { AxiosError } from "axios";
axios.interceptors.request.use(
  (request) => {
    console.log("request sent", request);
    return Promise.resolve(request);
  },
  (err) => {
    console.log("request error", err);
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: AxiosError) => {
    return Promise.reject(err.response?.data);
  }
);
axios.defaults.baseURL = "https://blogerapi.ir";
axios.defaults.headers.common["Accept"] = "application/json";
export default axios;
