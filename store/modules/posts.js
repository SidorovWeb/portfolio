export const state = () => ({
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
  }
};

export const getters = {
  getPostsLoaded: state => state.postsLoaded
};
