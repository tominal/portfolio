<template lang="html">
  <div>
    <h1>Home page</h1>
    <router-link :to="{ name: 'About', params: {} }">about page</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
