<template lang="html">
  <div>
    <navbar />

    <h3 class="border-bottom pb-2">Contact me</h3>

    <p>I do not have a form for contact. Probably because I don't care for it.</p>

    <p>
      If you need to get in contact with me, email me:
      <span v-if="!clicked" @mousedown="showEmail">
        {{ email }}
      </span>
      <pre v-else>{{ email }}</pre>
    </p>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
export default {
    data() {
      return {
        clicked: false,
        email: "[click to view]"
      }
    },
    components: {
      'navbar': Navbar
    },
    methods: {
        showEmail() {
          if(!this.clicked) {
            console.log('clicked')
            this.email = "tom@thomasj.me"
            this.clicked = true
          }
        }
    }
}
</script>

<style lang="css" scoped>
</style>
