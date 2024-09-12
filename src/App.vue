<template>
  <div class="container-fluid cubes p-0 m-0">
    <div class="row w-100 m-0 p-0">
      <aside class="col-12 m-0 p-0">
        <Navbar></Navbar>
      </aside>
    </div>
    <div class="row w-100" >
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
