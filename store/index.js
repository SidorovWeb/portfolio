import axios from "axios";
import Cookie from "js-cookie";
import { TweenMax } from "gsap";

export const state = () => ({
  token: null,
  start: false,
  screen: true,
  toggleSidebar: false,
  continueRoute: true,
  message: null,
  postsLoaded: []
});

export const mutations = {
  setPost(state, posts) {
    const newPosts = [];

    posts.forEach(e => {
      e.tags = e.tags.split(",");
      newPosts.push(e);
    });
    state.postsLoaded = newPosts;
  },
  addPost(state, post) {
    state.postsLoaded.push(post);
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(
      post => post.id === postEdit.id
    );
    state.postsLoaded[postIndex] = postEdit;
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
  },
  toggleSidebar(state) {
    state.toggleSidebar = !state.toggleSidebar;
  },
  setScreen(state, screen) {
    state.screen = screen;
  },
  setContinueRoute(state, continueRoute) {
    state.continueRoute = continueRoute;
  },
  setMessage(state, message) {
    state.message = message;
  },
  playSVG(state, play) {
    state.start = play;
  }
};
export const actions = {
  //  получаем все посты из БД firebase
  nuxtServerInit({ commit }) {
    return axios
      .get("https://my-portfolio-50ba0.firebaseio.com/posts.json")
      .then(res => {
        // передаем id каждому посту
        const postArray = [];
        for (let key in res.data) {
          postArray.push({ ...res.data[key], id: key });
        }
        // res
        commit("setPost", postArray);
      })
      .catch(e => console.log(e));
  },
  //  AUTH
  authUser({ commit }, authData) {
    const key = "AIzaSyCiFUu-E7qJ5O20XiHRCJirmoHE5rwEqrU";
    return axios
      .post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        let token = res.data.idToken;
        commit("setToken", token);
        // continue route
        commit("setContinueRoute", true);
        // to LocalStorage
        localStorage.setItem("token", token);
        // to cookie
        Cookie.set("jwt", token);
      })
      .catch(e => {
        console.log(e);
        commit("setContinueRoute", false);
      });
  },
  initAuth({ commit }, req) {
    let token;
    if (req) {
      if (!req.headers.cookie) return false;
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(t => t.trim().startsWith("jwt="));
      if (!jwtCookie) return false;
      token = jwtCookie.split("=")[1];
    } else {
      token = localStorage.getItem("token");
      if (!token) return false;
    }
    commit("setToken", token);
  },
  logoutUser({ commit }) {
    commit("destroyToken");
    localStorage.removeItem("token");
    Cookie.remove("jwt");
  },
  // добавить пост в БД firebase
  async addPost({ commit }, post) {
    return await axios
      .post("https://my-portfolio-50ba0.firebaseio.com/posts.json", post)
      .then(res => {
        // передаем id вместе с постом
        commit("addPost", { ...post, id: res.data.name });
      })
      .catch(e => console.log(e));
  },
  editPost({ commit, state }, post) {
    return axios
      .put(
        `https://my-portfolio-50ba0.firebaseio.com/posts/${post.id}.json?auth=${state.token}`,
        post
      )
      .then(() => {
        commit("editPost", post);
      })
      .catch(e => {
        console.log(e);
      });
  },
  toggleSidebar({ commit }) {
    commit("toggleSidebar");
  },
  setToken({ commit }) {
    commit("setToken");
  },
  setScreen({ commit }, screen) {
    commit("setScreen", screen);
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
  playSVG({ commit }, play) {
    commit("playSVG", play);
  }
};

export const getters = {
  getPostsLoaded: state => state.postsLoaded,
  getOneImg: state => {
    const arrayPosts = state.postsLoaded;
    const arrayImg = [];
    arrayPosts.forEach(e => {
      arrayImg.push(e.img);
    });

    const randomItem = arrayImg[Math.floor(Math.random() * arrayImg.length)];

    return randomItem;
  },
  checkAuchUser: state => state.token != null,
  toggleSidebar: state => state.toggleSidebar,
  getplaySVG: state => state.start
};
