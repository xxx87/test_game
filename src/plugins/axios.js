"use strict";

import Vue from "vue";
import axios from "axios";

let config = {
  baseURL: process.env.baseURL || "http://localhost:3001/api/v1/"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response.data;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
Vue.prototype.$http = _axios;

export default new Vue();
