<template>
  <div>
    <b-form
      @submit="login"
      onsubmit="return false"
    >
      <b-form-group
        label="Username"
      >
        <b-form-input
          v-model="username"
          required
        />
      </b-form-group>
      <b-form-group
        label="Password"
      >
        <b-form-input
          v-model="password"
          type="password"
          required
        />
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        password: null,
        username: null
      }
    },
    mounted() {
      console.log(this.username)
    },
    methods: {
      resetForm() {
        this.username = null;
        this.password = null;
      },
      login() {

      }
    }
  }
</script>
