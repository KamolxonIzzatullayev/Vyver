import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    authenticated(state) {
      return !!state.user;
    },
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {},
  modules: {},
});
