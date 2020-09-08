<template lang="html">
  <div>
    <navbar />

    <h3 class="pb-2 border-bottom">Blog</h3>

    <blog :id="$route.params.id" />
  </div>
</template>

<script>
  import Navbar from "../components/Navbar";
  import Blog from "../components/Blog"
export default {
  components: {
    'navbar': Navbar,
    'blog': Blog
  }
}
</script>

<style lang="css" scoped>
</style>
