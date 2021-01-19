import { genVuexModels } from "vuex-models";

const stateModels = genVuexModels(
  {
    wordList: [
      "complice",
      "creative",
      "elegante",
      "farceuse",
      "joviale",
      "motivee",
      "ordonnee",
      "prudente",
      "sexy",
      "tendre",
      "random",
      "love",
      "branch",
      "grid",
      "drags",
      "Black",
      "Dog",
      "Package",
      "Block",
      "Speed"
    ],
    users: []
  },
  false
); // By default: Vxm

const stateModule = {
  namespaced: true,
  ...stateModels,
  mutations: {
    updateUser(state, user) {
      if (state.users.length > 4) {
        state.users = [];
      }
      state.users.push(user);
    }
  }
};

export default stateModule;
