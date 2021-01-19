import { getAnswers } from "@/api/answers";

export default {
  namespaced: true,
  state: {},
  getters: {
    getState: (state) => (name) => {
      return state[name];
    }
  },
  mutations: {
    mutState(state, data) {
      state[data.n] = data.v;
    }
  },
  actions: {
    getUserAnswer(ctx) {
      let me = this;
      return new Promise((resolve, reject) => {
        getAnswers()
          .then((user) => {
            ctx.commit("gsm/updateUser", user, { root: true });
            resolve(user);
          })
          .catch(function(error) {
            reject(error);
          });
      });
    }
  }
};
