<template>
  <div id="app">
    <div class="d-flex align-items-center bg-dark text-light footer_style border border-top">
      <router-link
        to="/"
        class="d-flex justify-content-center align-items-center footer_button bg-light text-dark"
      >Home</router-link>
      <router-link
        to="/bio"
        class="d-flex justify-content-center align-items-center footer_button bg-light text-dark"
      >Bio</router-link>
      <router-link
        to="/CV"
        class="d-flex justify-content-center align-items-center footer_button bg-light text-dark"
      >CV</router-link>
      <router-link
        to="/contact"
        class="d-flex justify-content-center align-items-center footer_button bg-light text-dark"
      >Contact</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style>
.footer_style {
  height: 50px;
}
.footer_button {
  height: 100%;
  width: 25%;
  border-style: solid;
  /* border-left-style: solid; */
}
</style>
