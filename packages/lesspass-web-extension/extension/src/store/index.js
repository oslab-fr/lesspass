import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import defaultPassword from "../../../../lesspass-pure/src/store/defaultPassword";

Vue.use(Vuex);

const state = {
  defaultPassword: defaultPassword,
};

export default new Vuex.Store({
  state,
  plugins: [
    createPersistedState({
      key: "lesspass",
      paths: ["defaultPassword"]
    })
  ],
  mutations: {
    updateDefaultLogin(state, login) {
      state.defaultPassword.login = login;
    }
  }
});
