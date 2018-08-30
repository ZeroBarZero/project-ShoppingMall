<template>
  <h1>Logout</h1>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created: function () {
    this.$http.get('/api/user/logout').then((response) => {
      this.$router.push({path: '/'})
    })
  }
}
</script>
