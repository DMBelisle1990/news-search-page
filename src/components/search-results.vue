<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.url">
        <search-result-item
          v-bind:title="article.title"
          v-bind:author="article.author"
          v-bind:description="article.description"
          v-bind:image="article.urlToImage" />
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../store';
import SearchResultItem from './search-result-item.vue'

export default {
  name: 'search-results',
  store,
  computed: {
    articles () {
      return store.state.articles
    }
  },
  components: {
    SearchResultItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border-bottom: 1px solid rgb(224, 224, 224);
  display: inline-block;
  padding: 1.5rem 1rem;
  width: 100%;
}

li:last-of-type {
  border-bottom: none;
}
</style>
