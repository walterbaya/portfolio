<template>
<nav class="navbar navbar-expand-md navbar-light">
  <div class="navbar-brand image-container align-self-start ms-3 d-flex p-2 logo">
    <img class="img-fluid rounded  d-flex" src="../assets/img/icon.png" alt="WalterBayaLogo" />
  </div>
  <div class="collapse navbar-collapse justify-content-between px-3 d-none d-md-flex" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="biography" class="nav-link h5 text-dark">biografía</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/experiencies" class="nav-link  text-dark h5">experiencia</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects" class="nav-link text-dark h5">proyectos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/certificates" class="nav-link text-dark h5">certificados</router-link>
      </li>
    </ul>

    <ul class="list-group d-flex flex-row  justify-content-evenly">
        <li class="list-group-item p-0 border-0"><a href="https://www.linkedin.com/in/walterbaya" class="p-2"><i class="fa-brands fa-linkedin fa-xl text-dark"></i></a></li>
        <li class="list-group-item p-0 border-0"><a href="https://github.com/walterbaya" class="p-2"><i class="fa-brands fa-github fa-xl text-dark"></i></a></li>
        <li class="list-group-item p-0 border-0"><a href ="mailto:walterbaya1996@gmail.com" class="p-2"><i class="fa-regular fa-envelope fa-xl text-dark"></i></a></li>
        <li class="list-group-item p-0 border-0"><a href="#" class="p-2"><i class="fa-brands fa-youtube fa-xl text-dark" ></i></a></li>
        <li class="list-group-item p-0 border-0"><a href="tel:+54 1128653459" class="p-2"><i class="fa-brands fa-whatsapp fa-xl text-dark"></i></a></li>
    </ul>
  </div>
</nav>

</template>

<script>
export default {
  name: "Navbar",

  mounted() {
    //document.addEventListener("scroll", this.fixedScrollingHandler);
    //document.addEventListener("onresize", this.fixedScrollingHandler);
    //this.fixedScrollingHandler();
  },
  data() {
    return {
      currentScrollPosition: 0,
    };
  },
  methods: {
    /*fixedScrollingHandler: function () {
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
    */
  },
};
</script>