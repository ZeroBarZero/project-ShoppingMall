
<template>
  <div class="container">
  <div class="section">
    <div class="columns">
      <div class="column">
        <div class="section">
          <div class="columns is-multiline">
            <template  v-for="(n, index) in 6">
              <div v-bind:key="index" class="column is-one-third">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">서울로카 스티커+엽서 set</p>
                        <p class="subtitle is-6">3000원</p>
                        <a>#seoul</a> <a>#game</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </template>

          </div>
        </div>
        <div class="section">
          <nav class="pagination is-centered">
            <a class="pagination-previous">Previous</a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
              <li><a class="pagination-link">1</a></li>
              <li><span class="pagination-ellipsis">&hellip;</span></li>
              <li><a class="pagination-link">45</a></li>
              <li><a class="pagination-link is-current">46</a></li>
              <li><a class="pagination-link">47</a></li>
              <li><span class="pagination-ellipsis">&hellip;</span></li>
              <li><a class="pagination-link">86</a></li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
</script>

<style>
</style>
