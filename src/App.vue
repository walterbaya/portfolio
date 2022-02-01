<template>
  <div id="app" class="p-0 m-0 bg-dark h-100">
    <div class="row m-0 p-0">
      <div class="col-12 col-md-3 m-0 p-0 h-100">
        <Navbar></Navbar>
      </div>
      <div class="col-12 col-md-9 m-0 p-0">
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
    document.body.style.background = "white";
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
