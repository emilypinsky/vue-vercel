const state = {
  isAuthenticated: false,
};

const getters = {
  getIsAuthenticated: (state) => {
    return state.isAuthenticated;
  },
};

const mutations = {
  mutateIsAuthenticated: (state, payload) => {
    state.isAuthenticated = payload;
  },
};

const actions = {
  setIsAuthenticated: (context, payload) => {
    context.commit("mutateIsAuthenticated", payload);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
