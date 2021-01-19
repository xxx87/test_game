"use strict";

import Vue from "vue";
import axios from "axios";

let config = {
  baseURL: process.env.baseURL || "http://localhost:3001/api/v1/"
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);
Vue.prototype.$http = _axios;

export default new Vue();
