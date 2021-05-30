<template>
  <div>
    <form v-on:submit="submitHandler">
      <input type="text" name="search" placeholder="Search...">
    </form>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  name: 'search-bar',
  props: {
    placeholder: String
  },
  store,
  methods: {
    /**
     *
     * @param {Event} e
     */
    async submitHandler(e) {
      e.preventDefault();

      const url =
        `https://newsapi.org/v2/everything?q=${e.target.elements.search.value}
        &from=2021-05-29
        &sortBy=popularity
        &pageSize=20
        &apiKey=ee60a666bf84486c847ad2fd060f231d`;

      const req = new Request(url);
      const response = await fetch(req);
      const data = await response.json();

      this.$store.commit('SET_ARTICLES', data.articles)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type=text] {
    display: block;
    width: 50%;
    height: 1.5rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    background-color: #fff;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 0.2rem;
  }

  form {
    display: flex;
    justify-content: center;
  }
</style>
