<div id="container">
  <blog-card></blog-card>
</div>

<template id="blog-card">
  <div class="card-link">
    <article class="blog-card">
      <img class="post-image" :src="image" />
      <div class="article-details">
        <h4 class="post-category">{{ category }}</h4>
        <h3 class="post-title">{{ name }}</h3>
        <p class="post-description">{{ desc }}</p>
        <p class="post-author">By {{ author }}</p>
      </div>
    </article>
  </div>
</template>

<script>
</script>

<style >
</style>
