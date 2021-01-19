import Vue from "vue";
import Vuex from "vuex";
import stateModule from "./modules/stateModule"; // global state module
import answers from "./modules/answers"; // global state module

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    answers,
    gsm: stateModule
  }
});
