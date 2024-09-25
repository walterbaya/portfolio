<template>
  <div id="app" class="container-fluid" >
    <div class="row">
      <aside class="col-12 px-0">
        <Navbar></Navbar>
      </aside>
    </div>
    <div class="row">
      <div class="col-12 py-3 py-md-0 d-none d-md-block">
        <router-view></router-view>
      </div>
      <div class="col-12 py-3 d-block d-md-none">
        <section>
          <Biography id="biography"></Biography>
        </section>
        <section  class="border-top border-white">
          <Experiencies></Experiencies>
        </section>
        <section class="border-top border-white">
          <Projects></Projects>
        </section>
        <section class="border-top border-white">
          <Certificates></Certificates>
        </section>
        <section class="border-top border-white">
          <UniversityStudies></UniversityStudies>
        </section>
      </div>
    </div>
    <div class="row d-md-none mt-3">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Biography from "./components/Biography.vue";
import Experiencies from "./components/Experiencies.vue";
import Projects from "./components/Projects.vue";
import Certificates from "./components/Certificates.vue";
import UniversityStudies from "./components/UniversityStudies.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Biography,
    Experiencies,
    Projects,
    Certificates,
    UniversityStudies,
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
