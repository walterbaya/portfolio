<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <aside class="col-12 col-md-3 d-flex justify-content-center">
        <Navbar></Navbar>
      </aside>
      <div class="col-12 col-md-9 p-3">
        <!--<router-view></router-view>-->
        <section>
          <Biography id="biography"></Biography>
        </section>
        <hr/>
        <section id="experiencies" class="border-top border-white">
          <Experiencies></Experiencies>
        </section>
        <hr/>
        <section id="projects" class="border-top border-white">
          <Projects></Projects>
        </section>
        <hr/>
        <section class="border-top border-white">
          <Habilities></Habilities>
        </section>
        <hr/>
        <section id="certificates" class="border-top border-white">
          <Certificates></Certificates>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Biography from "./components/Biography.vue";
import Projects from "./components/Projects.vue";
import Habilities from "./components/Habilities.vue";
import Certificates from "./components/Certificates.vue";
import Experiencies from "./components/Experiencies.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Biography,
    Projects,
    Habilities,
    Certificates,
    Experiencies
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
