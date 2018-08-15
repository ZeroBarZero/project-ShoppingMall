<template>
  <div>
    <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                            <img src="../images/bulma.png" alt="Logo">
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
                                <router-link to="/" exact>Store</router-link>
                        </div>
                        <div class="navbar-item is-active">
                                <router-link to="/" exact>Tour</router-link>
                        </div>
                        <div class="navbar-item is-active">
                                <router-link to="/" exact>Project</router-link>
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
                                <a class="navbar-item">
                                        Dashboard
                                    </a>
                                <a class="navbar-item">
                                        Profile
                                    </a>
                                <a class="navbar-item">
                                        Settings
                                    </a>
                                <hr class="navbar-divider">
                                <div class="navbar-item">
                                  <router-link to="/Login" exact>Login</router-link>
                                </div>
                                <div class="navbar-item">
                                  <router-link to="/logout">Logout</router-link>
                                </div>
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
    <router-view></router-view>
    <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <div class="soc">
                        <a href="#"><i class="fa fa-github-alt fa-2x" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                    </div>
                    <p>
                        <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>.
                        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br>
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
