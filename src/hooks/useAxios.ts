"use client";

import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const useAxios = () => {
  const instance = axios.create({ baseURL });

  instance.interceptors.request.use(
    function setConfig(param) {
      param.headers["content-Type"] = "application/json";
      return param;
    },
    function getError(error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function handleResponse(response) {
      return response;
    },
    function handleError(error) {
      return Promise.reject(error);
    }
  );
  return instance;
};

export default useAxios;
