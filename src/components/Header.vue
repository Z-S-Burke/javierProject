<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light" top="fixed" id="navbar">
      <b-navbar-brand>
        <router-link to="/" class="d-flex align-items-center-text-light ml-2">
          <h2 class="ml-2 mt-2 text-dark">J. P. Sandoval</h2>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-dark" to="/">Home</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-dark" to="/bio">Research and Teaching</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-dark" to="/CV">CV</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-dark" to="/Blog">Blog</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-dark" to="/contact">Contact</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<style scoped>
.logo {
  height: 50px;
  width: 50px;
}

.logo_text {
  text-decoration: none;
}

.custom_bg_color {
  background-color: rgb(241, 144, 16);
}
</style> 