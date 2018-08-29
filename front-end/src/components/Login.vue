<template>
<div id="login">
  <section class="hero is-success is-fullheight">
      <div class="hero-body">
          <div class="container has-text-centered">
              <div class="column is-4 is-offset-4">
                  <h3 class="title has-text-grey">Login</h3>
                  <p class="subtitle has-text-grey">Please login to proceed.</p>
                  <div class="box">
                      <figure class="avatar">
                          <img src="https://placehold.it/128x128">
                      </figure>
                      <form>
                          <div class="field">
                              <div class="control">
                                  <input v-model="form.email" class="input is-large" type="email" placeholder="Your Email" autofocus="">
                              </div>
                          </div>

                          <div class="field">
                              <div class="control">
                                  <input v-model="form.password" class="input is-large" type="password" placeholder="Your Password">
                              </div>
                          </div>
                          <div class="field">
                              <label class="checkbox">
                                <input type="checkbox">
                                Remember me
                              </label>
                          </div>
                          <button v-on:click="onSubmit" class="button is-block is-info is-large is-fullwidth">Login</button>
                      </form>
                  </div>
                  <p class="has-text-grey">
                      <router-link to="/register">Sign Up</router-link> &nbsp;·&nbsp;
                      <a href="../">Forgot Password</a>
                  </p>
              </div>
          </div>
      </div>
  </section>
</div>

</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit: function (evt) {
      evt.preventDefault()
      this.$http.post('/api/user/login', this.form).then((response) => {
        alert(JSON.stringify(response.data))
      })
    }
  }
}
</script>
<style>

#login {
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
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

</style>
