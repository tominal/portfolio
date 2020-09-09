<template>
  <b-card
    class="mb-3"
  >
    <h4>
      {{ blog.title }}
      <span class="float-right">
        <b-button
          variant="primary"
          size="sm"
          @click="goto(blog.id)"
        >
          View
        </b-button>
      </span>
    </h4>
    {{ blog.created_at }}
  </b-card>
</template>

<script>
  import Thomas from '../apis/Thomas'
  export default {
    props: {
      blog: Object
    },
    methods: {
      goto(bid) {
        this.$router.replace({ name: 'Blog', params: { id: bid } })
      }
    }
  }
</script>
