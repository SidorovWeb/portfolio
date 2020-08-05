export const state = () => ({
  isMobile: false,
  isDesktop: true
});

export const mutations = {
  setMobile(state) {
    state.isMobile = true;
    state.isDesktop = false;
  },

  setDescktop(state) {
    state.isDesktop = true;
    state.isMobile = false;
  }
};

export const actions = {
  setMobile({ commit }) {
    commit("setMobile");
  },

  setDescktop({ commit }) {
    commit("setDescktop");
  }
};

export const getters = {
  getMobile(state) {
    return state.isMobile;
  },

  getDesktop(state) {
    return state.isDesktop;
  }
};
