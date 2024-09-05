<template>
  <nav
    class="
      navbar navbar-light
      d-flex
      flex-md-column
      justify-content-end
      navbar-expand-lg
      bg-dark
    "
    id="navigation-bar"
  >
    <div class="px-3 w-100">
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

        <div           
        
          class="
            navbar-nav
            align-items-center
            d-none d-md-flex
            justify-content-between
            w-50
          ">
          <div class="image-container align-self-start mx-2 d-none d-md-flex bg-white p-2">
          
          <img
            class="img-fluid rounded d-none d-md-flex"
            src="../assets/img/coding.svg"
            alt="WalterBayaLogo"
          />
          </div>


          <ul
          class="
            navbar-nav
            align-items-center
            d-none d-md-flex
            justify-content-around
            w-75
          "
        >

          <li class="nav-item">
            <router-link
              to="biography"
              class="nav-link hover-white color-white h5"
              >biografía</router-link
            >
          </li>
          <!--
          <li class="nav-item">
            <router-link to="/blogs" class="nav-link h5">Blogs</router-link>
          </li>-->
          <li class="nav-item">
            <router-link to="/experiencies" class="nav-link hover-white color-white h5"
              >experiencia</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/projects"
              class="nav-link hover-white color-white h5"
              >proyectos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/habilities"
              class="nav-link hover-white color-white h5"
              >habilidades</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/certificates"
              class="nav-link hover-white color-white h5"
              >certificados</router-link
            >
          </li>
        </ul>
        
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
    };
  },
};
</script>