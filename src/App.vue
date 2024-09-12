<template>
  <div id="app" class="container-fluid cubes">
    <div class="row">
      <aside class="col-12 d-flex justify-content-center">
        <Navbar></Navbar>
      </aside>
    </div>
    <div class="row" >
      <div class="col-12 p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
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
