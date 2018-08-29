<template>
<div id="register">
  <section class="hero is-success is-fullheight">
      <div class="hero-body">
          <div class="container has-text-centered">
              <div class="column is-4 is-offset-4">
                  <h3 class="title has-text-grey">Sign up</h3>
                  <p class="subtitle has-text-grey">Simply regist!</p>
                  <div class="box">
                      <figure class="avatar">
                          <img src="https://placehold.it/128x128">
                      </figure>
                      <form>
                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="text" placeholder="name" autofocus="">
                            </div>
                        </div>
                          <div class="field">
                              <div class="control">
                                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                              </div>
                          </div>

                          <div class="field">
                              <div class="control">
                                  <input id="pw" class="input is-large" type="password" placeholder="Your Password" onchange="issame (this)">
                              </div>
                          </div>

                          <div class="field">
                              <div class="control">
                                  <input id="pwcheck" class="input is-large" type="password" placeholder="Check Password" onchange="issame (this)">
                              </div>
                              <span id="same"></span>
                          </div>

                          <button class="button is-block is-info is-large is-fullwidth">Sign up</button>
                      </form>
                  </div><p class="has-text-grey">
                      <router-link to="/login">Already Member?</router-link>
                  </p>
              </div>
          </div>
      </div>
  </section>
</div>

</template>

<script>
</script>

<style>

#register {
  font-family: 'Open Sans', serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
#register .box {
  margin-top: 5rem;
}
#register .avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
#register .avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
#register input {
  font-weight: 300;
}
#register span {
  padding-top: 1rem;
}

</style>
