<template>
  <div id="app" class="container-fluid cubes w-100" >
    <div class="row">
      <aside class="col-12 px-0">
        <Navbar></Navbar>
      </aside>
    </div>
    <div class="row">
      <div class="col-12 p-3 d-md-block">
        <router-view></router-view>
      </div>
    </div>
    <div class="row d-md-none">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
  },
};
</script>

<style>
@import "assets/css/all.min.css";
@import "assets/css/index.css";
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
</style>
