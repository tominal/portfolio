<template>
  <div id="app">
    <!-- Navbar here -->
    <!-- <navbar/> -->
    <b-container style="flex: 1;">
      <h3>Thomas J's online portfolio</h3>
      <hr>
      <!-- {{ $store.state.count }}
      <b-button variant="info" v-on:click="$store.commit('increment')">increment state</b-button> -->
      <router-view/>
    </b-container>

    <thomas-footer/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
