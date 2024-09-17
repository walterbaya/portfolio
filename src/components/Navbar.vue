<template>
  <nav
    class="
      navbar navbar-light
      d-flex
      flex-md-column
      justify-content-md-start justify-content-end
      navbar-expand-lg
    "
    id="navigation-bar"
  >
    <div class="px-3">
      <button
        class="navbar-toggler d-block d-md-none"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        type="button"
        v-on:click="clickevent"
        id="hamburguer"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav d-md-none py-3">
          <li class="nav-item">
            <router-link
              to="#"
              v-scroll-to="'#biography'"
              class="nav-link hover-white color-black"
              >Biografía</router-link
            >
          </li>
          <!--
          <li class="nav-item">
            <router-link to="/blogs" class="nav-link">Blogs</router-link>
          </li>-->
          <li class="nav-item">
            <router-link to="/experiencies" class="nav-link hover-white color-black"
              v-scroll-to="'#experiencies'"
              >Experiencia</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              v-scroll-to="'#habilities'"
              class="nav-link hover-white color-black"
              >Habilidades</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              v-scroll-to="'#projects'"
              class="nav-link hover-white color-black"
              >Proyectos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              v-scroll-to="'#certificates'"
              class="nav-link hover-white color-black"
              >Certificados</router-link
            >
          </li>
        </ul>
      </div>
      <div
        class="
          align-items-center
          justify-content-center
          flex-column
          d-flex
          px-4
          mt-2
        "
      >
        <img
          class="img-fluid rounded align-self-start mx-2 d-md-none"
          src="../assets/img/coding.png"
          alt="WalterBayaLogo"
        />
        <ul
          class="
            navbar-nav
            d-none d-md-flex
            flex-md-column
            justify-content-center
            px-md-5
            pt-3
          "
        >
          <img
            class="img-fluid rounded align-self-start mx-2 d-none d-md-flex"
            src="../assets/img/coding.png"
            alt="WalterBayaLogo"
          />
          <li class="nav-item mt-5">
            <router-link
              to="#"
              v-scroll-to="'#biography'"
              class="nav-link hover-white color-black"
              >Biografía</router-link
            >
          </li>
          <!--
          <li class="nav-item">
            <router-link to="/blogs" class="nav-link">Blogs</router-link>
          </li>-->
          <li class="nav-item">
            <router-link to="/experiencies" class="nav-link hover-white color-black"
              v-scroll-to="'#experiencies'"
              >Experiencia</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              v-scroll-to="'#projects'"
              class="nav-link hover-white color-black"
              >Proyectos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              v-scroll-to="'#habilities'"
              class="nav-link hover-white color-black"
              >Habilidades</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              v-scroll-to="'#certificates'"
              class="nav-link hover-white color-black"
              >Certificados</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  mounted() {
    document.addEventListener("scroll", this.fixedScrollingHandler);
    document.addEventListener("onresize", this.fixedScrollingHandler);
    this.fixedScrollingHandler();
  },
  data() {
    return {
      currentScrollPosition: 0,
    };
  },
  methods: {
    fixedScrollingHandler: function () {
      //We keep the current scroll position updated all the time.
      const pastScrollPosition = this.currentScrollPosition;
      this.currentScrollPosition = window.scrollY;
      const div_content = document.getElementById("navigation-bar");
      const navbar = document.getElementById("navbar");

      if (window.outerWidth <= 767) {
        div_content.classList.add("fixed-top");
        if (this.currentScrollPosition > pastScrollPosition) {
          navbar.classList.remove("show");
          navbar.classList.add("hide");
          div_content.classList.remove("d-flex");
          div_content.classList.add("d-none");
        }
        if (this.currentScrollPosition < pastScrollPosition) {
          div_content.classList.add("d-flex");
          div_content.classList.remove("d-none");
        }
      } else {
        div_content.classList.remove("fixed-top");
      }
    },
  },
};
</script>