<template>
  <div id="container">
    <div id="left-col">
      <img :src="image" alt="Insert image text here">
    </div>
    <div id="right-col">
      <h2>{{ title }}</h2>
      <em>By {{ author }}</em>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-result-item',
  props: {
    title: String,
    author: String,
    description: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    align-items: center;
    display: flex;
  }

  #left-col {
    margin-right: 2rem;
  }

  #right-col {
    justify-content: flex-start;
    text-align: left;
  }

  h2 {
    margin: 0 0 0.3rem;
  }

  em {
    font-size: 14px;
  }

  img {
    width: 200px;
  }

  @media (max-width: 760px) {
    #container {
      flex-direction: column;
    }

    img {
      margin-bottom: 2rem;
    }
  }
</style>
