import Vue from "vue";
import Vuex from "vuex";
import stateModule from "./modules/stateModule"; // global state module
import answers from "./modules/answers"; // answers module

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    answers,
    gsm: stateModule
  }
});
