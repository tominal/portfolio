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
          autofocus
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
      <b-form-group class="text-right">
        <b-button
          variant="success"
          size="sm"
          type="submit"
        >
          Login
        </b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  import Thomas from '../apis/Thomas'

  export default {
    data() {
      return {
        password: null,
        username: null
      }
    },
    methods: {
      resetForm() {
        this.username = null;
        this.password = null;
      },
      login() {
        Thomas.login({
          username: this.username,
          password: this.password
        }).then(r => {
          console.log(r.data)
        })
      }
    }
  }
</script>
