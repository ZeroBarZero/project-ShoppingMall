<template>
  <div id="admin">
      <div class="container">
          <div class="columns">
              <div class="column is-3">
                  <aside class="menu">
                      <p class="menu-label">
                          General
                      </p>
                      <ul class="menu-list">
                          <li><router-link to="/admin" class="is-active">Dashboard</router-link></li>
                      </ul>
                      <p class="menu-label">
                          board "CURD"
                      </p>
                      <ul class="menu-list">
                          <li><router-link to="/admin/curd">curd Form</router-link></li>
                          <li><a>Store</a></li>
                          <li><a>Project</a></li>
                          <li><router-link to="/admin/seoul">Seoul</router-link></li>
                      </ul>
                      <p class="menu-label">
                          payment IMPORT
                      </p>
                  </aside>
              </div>
              <div class="column is-9">
                <router-view></router-view>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style>
#admin {
  font-family: 'Open Sans', serif;
  font-size: 16px;
  line-height: 1.5;
  height: 100%;
  background: #ECF0F3;
  padding-top: 20px;
}
#admin nav.navbar {
  border-top: 4px solid #276cda;
  margin-bottom: 1rem;
}
#about .navbar-item.brand-text {
  font-weight: 300;
}
#about .navbar-item, .navbar-link {
  font-size: 14px;
  font-weight: 700;
}
#about .columns {
  width: 100%;
  height: 100%;
}
#about .menu-label {
  color: #8F99A3;
  letter-spacing: 1.3;
  font-weight: 700;
}
#about .menu-list a {
  color: #0F1D38;
  font-size: 14px;
  font-weight: 700;
}
#about .menu-list a:hover {
  background-color: transparent;
  color: #276cda;
}
#about.menu-list a.is-active {
  background-color: transparent;
  color: #276cda;
  font-weight: 700;
}
</style>
