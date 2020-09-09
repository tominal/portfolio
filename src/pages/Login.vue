<template>
  <div>
    <navbar />

    <b-alert
      variant="danger"
      show
      v-if="error"
      class="text-center"
    >
      {{ error }}
    </b-alert>
    <b-form
      @submit="login"
      onsubmit="return false"
    >
      <b-form-group
        label="Username"
      >
        <b-form-input
          v-model="username"
          ref="username"
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
  import { mapActions, mapGetters } from 'vuex'
  import Navbar from '../components/Navbar'

  export default {
    data() {
      return {
        password: null,
        username: null,
        error: null,
      }
    },
    components: {
      'navbar': Navbar
    },
    computed: {
      ...mapGetters(['getUser'])
    },
    mounted() {
      if(this.getUser.rank > 0)
        this.$router.replace({ name: 'Dashboard' })
    },
    methods: {
      ...mapActions(['setUser']),
      resetForm() {
        this.username = null;
        this.password = null;
        this.error = null;
      },
      login() {
        Thomas.login({
          username: this.username,
          password: this.password,
        }).then(r => {
          if(r.data.status === 'success') {
            this.setUser(r.data.user)
            this.resetForm()
            if(this.getUser.rank === 1)
              this.$router.replace({ name: 'Dashboard' })
            else
              this.$router.replace({ name: 'About' })
          } else {
            this.resetForm()
            this.error = "Incorrect credentials."
            this.$refs.username.focus()
          }
        })
      }
    }
  }
</script>
