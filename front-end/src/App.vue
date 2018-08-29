<template>
  <div>
    <nav class="navbar is-fixed-top">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                            <img src="https://cdn.imweb.me/thumbnail/20180412/5acef10761d81.png" alt="Logo">
                        </a>
                    <span class="navbar-burger burger" data-target="navbarMenu">
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
                                <router-link to="/" exact>Seoul</router-link>
                        </div>
                        <div class="navbar-item is-active">
                                <router-link  to="/" exact>Contact</router-link>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                    Account
                                </a>
                            <div class="navbar-dropdown">
                              <div class="navbar-item">
                                <router-link to="/login" exact>Login</router-link>
                              </div>
                              <div class="navbar-item">
                                <router-link to="/mypage">Mypage</router-link>
                              </div>
                                <hr class="navbar-divider">
                                <div class="navbar-item">
                                  <router-link to="/admin" exact>Admin</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- END NAV -->
    <div id="super-body">
    <router-view></router-view>
    </div>
    <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <img class="fr-dib fr-draggable fr-fil" src="https://cdn.imweb.me/upload/S201803155aa9f28f5029a/5aceba9a45444.png" style="width: 70px; height: 39.7297px;">
                  <div class="soc">
                      <a href="http://www.instagram.com/anyoung_seoul/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                      <a href="http://www.facebook.com/anyoungseoul/"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                  </div>
                    <p>
                        <strong>Bulma</strong> by <a href="#">이용약관</a>.
                        The source code is licensed <a href="#">개인정보처리방침</a>. <br>
                    </p>
                </div>
            </div>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#super-body {
  margin-top: 60px;
}
.navbar
{
  z-index: 999;
}
.footer{
background-color: #222831;
color: lemonchiffon;
}
.footer p, strong
{color: lemonchiffon}
.footer a:hover
{color: crimson;}
.fa
{color: lemonchiffon;
    margin: 10px}
</style>
