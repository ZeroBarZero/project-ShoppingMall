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
                                <router-link to="/seoullist" exact>Seoul</router-link>
                        </div>
                        <div class="navbar-item is-active">
                                <a href="#contact" exact>Contact</a>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                    Account
                                </a>
                            <div class="navbar-dropdown" v-if="getAuth()">
                              <div class="navbar-item">
                                <router-link to="/mypage">Mypage</router-link>
                              </div>
                              <div class="navbar-item">
                                <router-link to="/login" exact>logout</router-link>
                              </div>
                                <hr class="navbar-divider">
                                <div class="navbar-item">
                                  <router-link to="/admin" exact>Admin</router-link>
                                </div>
                            </div>
                            <div class="navbar-dropdown" v-else>
                              <div class="navbar-item">
                                <router-link to="/mypage">Sign up</router-link>
                              </div>
                              <div class="navbar-item">
                                <router-link to="/login" exact>login</router-link>
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
            <div class="container columns is-multiline">
                <div class="column is-half content has-text-centered">
                  <div class="wrap">
                    <img class="fr-dib fr-draggable fr-fil" src="https://cdn.imweb.me/upload/S201803155aa9f28f5029a/5aceba9a45444.png" style="width: 70px; height: 39.7297px;">
                  <div class="soc">
                      <a href="http://www.instagram.com/anyoung_seoul/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                      <a href="http://www.facebook.com/anyoungseoul/"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                  </div>
                    <p>
                        <a href="#">이용약관 </a>
                        | <a href="#">개인정보처리방침</a><br>
                    </p>
                  </div>
                </div>
                  <form id="contact" class="column is-half" action="https://formspree.io/anyoungseoul@email.com" method="POST">
                    <h3 class="">Contact</h3>
                    <input type="text"  placeholder="Your name" name="name" required>
                    <input type="email"  placeholder="Your email" name="_replyto" required>
                    <textarea name="message" placeholder="Your message" required></textarea>
                    <input class="button is-light" type="submit" value="Send">
                  </form>
            </div>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getAuth () {
      this.$http.get('/api/user/isAuth').then((response) => {
        return response.data
      })
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#super-body {
  background: #f1f1f1;
  margin-top: 60px;
  box-sizing: border-box;
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
.footer .fa
{color: lemonchiffon;
    margin: 10px}

.footer .container {
  margin: auto;
}
.footer .wrap{
  padding-top : 50px;
}

    #contact input[type="text"],
    #contact input[type="email"],
    #contact input[type="tel"],
    #contact input[type="url"],
    #contact textarea,
    #contact button[type="submit"] {
      font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
    }

    #contact {
      background:transparent ;
      padding: 25px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    #contact h3 {
      display: block;
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 10px;
    }

    #contact h4 {
      margin: 5px 0 15px;
      display: block;
      font-size: 13px;
      font-weight: 400;
    }

    fieldset {
      border: medium none !important;
      margin: 0 0 10px;
      min-width: 100%;
      padding: 0;
      width: 100%;
    }

    #contact input[type="text"],
    #contact input[type="email"],
    #contact input[type="tel"],
    #contact input[type="url"],
    #contact textarea {
      width: 100%;
      border: 1px solid #ccc;
      background: #FFF;
      margin: 0 0 5px;
      padding: 10px;
    }

    #contact input[type="text"]:hover,
    #contact input[type="email"]:hover,
    #contact input[type="tel"]:hover,
    #contact input[type="url"]:hover,
    #contact textarea:hover {
      -webkit-transition: border-color 0.3s ease-in-out;
      -moz-transition: border-color 0.3s ease-in-out;
      transition: border-color 0.3s ease-in-out;
      border: 1px solid #aaa;
    }

    #contact textarea {
      height: 100px;
      max-width: 100%;
      resize: none;
    }

    #contact button[type="submit"] {
      cursor: pointer;
      width: 100%;
      border: none;
      background: #4CAF50;
      color: #FFF;
      margin: 0 0 5px;
      padding: 10px;
      font-size: 15px;
    }

    #contact button[type="submit"]:hover {
      background: #43A047;
      -webkit-transition: background 0.3s ease-in-out;
      -moz-transition: background 0.3s ease-in-out;
      transition: background-color 0.3s ease-in-out;
    }

    #contact button[type="submit"]:active {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    .copyright {
      text-align: center;
    }

    #contact input:focus,
    #contact textarea:focus {
      outline: 0;
      border: 1px solid #aaa;
    }

    ::-webkit-input-placeholder {
      color: #888;
    }

    :-moz-placeholder {
      color: #888;
    }

    ::-moz-placeholder {
      color: #888;
    }

    :-ms-input-placeholder {
      color: #888;
    }
</style>
