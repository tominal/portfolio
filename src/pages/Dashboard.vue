<template>
  <div>
    <h3>
      Dashboard
      <span class="float-right">
        <b-button
          variant="danger"
          size="sm"
          @click="changePassword"
        >
          Change Password
        </b-button>
      </span>
    </h3>

    <b-form
      @submit="createBlog"
      onsubmit="return false"
    >
      <b-form-group
        label="Title"
      >
        <b-form-input
          v-model="title"
          required
        />
      </b-form-group>
      <b-form-group
        label="Title"
      >
        <b-form-textarea
          v-model="content"
          required
        />
      </b-form-group>
      <b-form-group class="text-right">
        <b-button
          type="submit"
          variant="success"
          size="sm"
        >
          Create Blog
        </b-button>
      </b-form-group>
    </b-form>

    <div v-if="blogsLoading" class="text-center">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <dashblog v-for="b in blogs" :key="'b'+b.id" :blog="b" />

    <b-modal
      id="change-password"
    >
      <b-form
        @submit="postPass"
        onsubmit="return false"
      >
        <b-form-group
          label="Password"
        >
          <b-form-input
            type="password"
            v-model="password"
            required
          />
        </b-form-group>
        <b-form-group class="text-right">
          <b-button
            type="submit"
            size="sm"
            variant="success"
          >
            Change Password
          </b-button>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
  import DashBlog from '../components/DashBlog'
  import Thomas from "../apis/Thomas";
  import { mapGetters } from "vuex"

  export default {
    data() {
      return {
        blogsLoading: true,
        blogs: [],

        title: "",
        content: "",

        password: null
      }
    },
    computed: {
      ...mapGetters(['getUser'])
    },
    components: {
      'dashblog': DashBlog
    },
    mounted() {
      this.loadBlogs()
    },
    methods: {
      loadBlogs() {
        Thomas.blogs().then(r => {
          this.blogs = r.data
          this.blogsLoading = false
        })
      },
      createBlog() {
        Thomas.createBlog({
          title: this.title,
          content: this.content
        }).then(r => {
          if(r.data.status === 'success') {
            this.loadBlogs()
            this.resetBlog()
          }
        })
      },
      resetBlog() {
        this.title = ""
        this.content = ""
      },
      changePassword() {
        this.$bvModal.msgBoxConfirm('Change it?').then(v => {
          if(v) {
            this.$bvModal.show('change-password')
          }
        })
      },
      postPass() {
        // Thomas.changePass({
        //   user_id: this.getUser.id,
        //   password: this.password
        // }).then(r => {
        //
        // })
      }
    }
  }
</script>
