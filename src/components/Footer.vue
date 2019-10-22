<template lang="html">
  <!-- Sticky footer here -->
  <div>
    <b-navbar>
      <b-container>
        &copy; thomasj.me &sdot; {{ year }}
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      year: moment().format('Y')
    }
  }
}
</script>

<style media="screen">
  .navbar {
    background-color: #eee
  }
</style>
