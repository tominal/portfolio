<template>
  <div id="app">
    <!-- Navbar here -->
    <!-- <navbar/> -->
    <b-container style="flex: 1;">
      <h3 class="mt-3">Thomas' Online Portfolio</h3>
      <hr>

      <b-row>
        <b-col md="3">
          <b-img fluid src="//cdn.thomasj.me/assets/img/outline.png" rounded="circle" alt="Circle image"></b-img>
        </b-col>
        <b-col md="9">
          <router-view/>
        </b-col>
      </b-row>
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
