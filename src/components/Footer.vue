<template>
  <div id="app">
    <div class="d-flex align-items-center footer_style">
      <router-link
        to="/"
        class="d-flex mx-2 justify-content-center align-items-center footer_button text-dark"
      >Home</router-link>
      <router-link
        to="/bio"
        class="d-flex mx-2 justify-content-center align-items-center footer_button text-dark"
      >Bio</router-link>
      <router-link
        to="/CV"
        class="d-flex mx-2 justify-content-center align-items-center footer_button text-dark"
      >CV</router-link>
      <router-link
        to="/contact"
        class="d-flex mx-2 justify-content-center align-items-center footer_button text-dark"
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
  background-color: white;
  font: black; 
}
</style>
