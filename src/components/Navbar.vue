<template>
  <nav
    class="
      navbar navbar-dark
      d-flex
      flex-md-column
      justify-content-md-start
      justify-content-end
      navbar-expand-lg
      background-seagrey
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
        <ul class="navbar-nav d-md-none px-3">
          <li class="nav-item">
            <router-link to="/biography" class="nav-link mt-2 h3 hoverWhite"
              >Biografía</router-link
            >
          </li>
          <!--
          <li class="nav-item">
            <router-link to="/blogs" class="nav-link">Blogs</router-link>
          </li>-->
          <li class="nav-item">
            <router-link to="/certificates" class="nav-link h3 hoverWhite"
              >Certificados</router-link
            >
          </li>
          <!--<li class="nav-item">
            <router-link to="/experiencies" class="nav-link"
              >Experiencies</router-link
            >
          </li>-->
          <li class="nav-item">
            <router-link to="/habilities" class="nav-link h3 hoverWhite"
              >Habilidades</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link h3 hoverWhite">Proyectos</router-link>
          </li>
        </ul>
      </div>
      <div class="align-items-center justify-content-center d-flex px-4"><img class="img-fluid rounded" src="../assets/img/walterbayaicon.png" alt="WalterBayaLogo"></div>
      <ul class="navbar-nav d-none d-md-flex flex-md-column px-md-5">
        <li class="nav-item">
          <router-link to="/biography" class="nav-link h3 hoverWhite color-seablue">Biografía</router-link>
        </li>
        <!--<li class="nav-item">
          <router-link to="/blogs" class="nav-link">Blogs</router-link>
        </li>
        -->
        <li class="nav-item">
          <router-link to="/certificates" class="nav-link h3 hoverWhite color-seablue"
            >Certificates</router-link
          >
        </li>
        <!--
        <li class="nav-item">
          <router-link to="/experiencies" class="nav-link"
            >Experiencies</router-link
          >
          </li>
          -->

        <li class="nav-item">
          <router-link to="/habilities" class="nav-link h3  hoverWhite color-seablue"
            >Habilidades</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link h3 hoverWhite color-seablue">Proyectos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  mounted() {
    document.addEventListener("scroll", this.fixedScrollingHandler);
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
        div_content.classList.add('fixed-top');
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
      }
      else{
        div_content.classList.remove('fixed-top');
      }
    },
  },
};
</script>