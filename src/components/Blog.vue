<template>
  <div>
    {{ content }}
  </div>
</template>

<script>
  import Thomas from '../apis/Thomas'
  export default {
    props: {
      id: Number
    },
    data() {
      return {
        content: ''
      }
    },
    mounted() {
      this.getBlog(this.id)
    },
    methods: {
      getBlog(bid) {
        // Thomas.blog({
        //   id: bid
        // }).then(r => {
        //   this.content = r.data
        //
        //   this.content = 'Placeholder here'
        // })
        this.content = 'Placeholder here'
      }
    }
  }
</script>
