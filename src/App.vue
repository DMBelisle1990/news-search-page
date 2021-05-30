<template>
  <div id="search-container">
    <search-bar placeholder="Search..."/>
    <search-results/>
  </div>
</template>

<script>
import SearchBar from './components/search-bar.vue'
import SearchResults from './components/search-results.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResults
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#search-container {
  padding: 20px;
}
</style>
