<template lang="html">
  <div>
    <h3>About</h3>

    <b-navbar class="mb-3">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home', params: {} }">
          Home
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
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
