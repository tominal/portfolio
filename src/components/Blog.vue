<template>
  <div>
    {{ content }}
  </div>
</template>

<script>
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
