export const state = () => ({
  screen: true,
  nameLink: "about",
  firstScreen: true,
  toggleSidebar: false,
  message: null,
  clickNavMenu: false
});

export const mutations = {
  toggleSidebar(state) {
    state.toggleSidebar = !state.toggleSidebar;
  },
  setScreen(state, screen) {
    state.screen = screen;
  },
  setFirstScreen(state, screen) {
    state.firstScreen = screen;
  },
  setMessage(state, message) {
    state.message = message;
  },
  setNameNavLink(state, name) {
    state.nameLink = name;
  },
  setClickNavMenu(state, boolean) {
    state.clickNavMenu = boolean;
  }
};
export const actions = {
  toggleSidebar({ commit }) {
    commit("toggleSidebar");
  },
  setToken({ commit }) {
    commit("setToken");
  },
  setScreen({ commit }, screen) {
    commit("setScreen", screen);
  },
  setFirstScreen({ commit }, screen) {
    commit("setFirstScreen", screen);
  },
  setContinueRoute({ commit }, continueRoute) {
    commit("setContinueRoute", continueRoute);
  },
  setMessage({ commit }, message) {
    commit("setMessage", message);
    TweenMax.set(".message", { opacity: 1 });
    setTimeout(() => {
      TweenMax.to(".message", 1, {
        opacity: 0,
        onComplete: function() {
          commit("setMessage", null);
        }
      });
    }, 4000);
  },
  setNameNavLink({ commit }, name) {
    commit("setNameNavLink", name);
  },
  setClickNavMenu({ commit }, boolean) {
    commit("setClickNavMenu", boolean);
  }
};

export const getters = {
  toggleSidebar: state => state.toggleSidebar,
  getNameNavLink: state => state.nameLink,
  getClickNavMenu: state => state.clickNavMenu
};
