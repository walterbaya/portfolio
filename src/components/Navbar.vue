<template>
<nav class="
      navbar navbar-dark
      d-flex
      flex-md-column
      navbar-expand-md
      bg-dark     
      w-100
    ">
    <div class="px-md-5 w-100">

        <div class="
            navbar-nav
            align-items-center
            d-flex
            justify-content-center
          ">
            <div class="image-container align-self-start mx-2 d-flex bg-white p-2">

                <img class="img-fluid rounded  d-flex" src="../assets/img/coding.svg" alt="WalterBayaLogo" />
            </div>

            <ul class="
            navbar-nav
            align-items-center
            d-md-flex
            d-none
            justify-content-around
          ">

                <li class="nav-item">
                    <router-link to="biography" class="nav-link hover-white color-white h5">biografía</router-link>
                </li>
                  <!--
                <li class="nav-item">
                  <router-link to="/blogs" class="nav-link h5">Blogs</router-link>
                </li>-->
                <li class="nav-item">
                    <router-link to="/experiencies" class="nav-link hover-white color-white h5">experiencia</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/projects" class="nav-link hover-white color-white h5">proyectos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/habilities" class="nav-link hover-white color-white h5">habilidades</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/certificates" class="nav-link hover-white color-white h5">certificados</router-link>
                </li>
            </ul>

        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Navbar",

    data() {
        return {};
    },
};
</script>
