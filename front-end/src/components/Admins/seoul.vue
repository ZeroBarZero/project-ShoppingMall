<template>
  <div class="container">
    <h1 class="h1">Posts Manager</h1>
    <div class="columns">
      <div class="column">
        <button v-on:click="getProduct()">test</button>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Updated At</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.updatedAt }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populatePostToEdit(post)">Edit</a> -
                <a href="#" @click.prevent="deletePost(post.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
data () {
  return {
    posts: {},
    show: true
  }
},
methods: {
  getProduct: function () {
    this.$http.get('/api/mod/product').then((response) => {
        alert(JSON.stringify(response.data))
      })
    }
  }
}


</script>

<style>
</style>
