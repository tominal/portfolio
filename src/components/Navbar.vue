<template lang="html">
  <b-navbar class="mb-3">
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'About', params: {} }">
        About me
      </b-nav-item>
      <b-nav-item :to="{ name: 'Projects', params: {} }">
        Projects
      </b-nav-item>
      <b-nav-item :to="{ name: 'Blog', params: {} }">
        Blog
      </b-nav-item>
      <b-nav-item :to="{ name: 'Contact', params: {} }">
        Contact
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
