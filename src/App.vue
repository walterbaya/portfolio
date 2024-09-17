<template>
  <div class="container-fluid cubes bg-dark" >
    <div class="row">
      <aside class="col-12 px-0 mx-0">
        <Navbar></Navbar>
      </aside>
    </div>
    <div class="row">
      <div class="col-12p-3">
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
