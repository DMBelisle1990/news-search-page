import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      articles: []
    }
  },

  mutations: {
    SET_ARTICLES: (state, articles) => {
      store.state.articles = articles;
    }
  }
});
