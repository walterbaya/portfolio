<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2">
        <Navbar></Navbar>
      </div>
      <div class="col-12 col-md-10">
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
  created: function () {
    document.body.style.background = "";
    //#f8f9fa
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
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merienda+One&display=swap");
</style>
