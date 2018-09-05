<template>
  <nav class="navbar is-fixed-top">
          <div class="container">
              <div class="navbar-brand">
                  <a class="navbar-item" href="../">
                          <img src="https://cdn.imweb.me/thumbnail/20180412/5acef10761d81.png" alt="Logo">
                  </a>
                  <span class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                  </span>
              </div>
              <div id="navbarMenu" class="navbar-menu">
                  <div class="navbar-end">
                      <div class="navbar-item is-active">
                              <router-link to="/" exact>Home</router-link>
                      </div>
                      <div class="navbar-item is-active">
                              <router-link to="/" exact>About</router-link>
                      </div>
                      <div class="navbar-item is-active">
                              <router-link to="/storelist" exact>Store</router-link>
                      </div>
                      <div class="navbar-item is-active">
                              <router-link to="/" exact>Tour</router-link>
                      </div>
                      <div class="navbar-item is-active">
                              <router-link to="/projectlist" exact>Project</router-link>
                      </div>
                      <div class="navbar-item is-active">
                              <router-link to="/seoullist" exact>Seoul</router-link>
                      </div>
                      <div class="navbar-item is-active">
                              <a href="#contact" exact>Contact</a>
                      </div>
                      <div class="navbar-item has-dropdown is-hoverable">
                          <a class="navbar-link">
                                  Account
                          </a>
                          <div class="navbar-dropdown" v-if="this.isAuth">
                            <div class="navbar-item">
                              <router-link to="/mypage">Mypage</router-link>
                            </div>
                            <div class="navbar-item">
                              <router-link to="/logout" exact>Logout</router-link>
                            </div>
                            <hr class="navbar-divider">
                            <div class="navbar-item">
                              <router-link to="/admin" exact>Admin</router-link>
                            </div>
                          </div>
                          <div class="navbar-dropdown" v-else>
                            <div class="navbar-item">
                              <router-link to="/register" exact>Sign up</router-link>
                            </div>
                            <div class="navbar-item">
                              <router-link to="/login" exact>Login</router-link>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
</template>

<script>
export default {
  data () {
    return {
      isAuth: false
    }
  },
  methods: {
    getAuth: function () {
      this.$http.get('/api/user/isAuth').then((response) => {
        this.isAuth = response.data
      })
    }
  },
  created () {
    this.getAuth()
  }
}
</script>
