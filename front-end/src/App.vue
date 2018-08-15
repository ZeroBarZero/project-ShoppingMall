<template>
  <div>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/logout">Logout</router-link>
    <router-link to="/Login" exact>Login</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/posts/new" exact>New Post</router-link>
    <router-link to="/posts/detail" exact>New Post</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
