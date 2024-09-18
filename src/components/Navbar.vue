<template>
<nav class="   
    border-bottom-blue
    navbar navbar-dark
    d-flex
    flex-md-column
    navbar-expand-md
    w-100

    ">
    <div class="px-md-5 w-100">

        <div class="
            navbar-nav
            align-items-center
            d-flex
            flex-row
            justify-content-between 
        ">
            <div class="image-container align-self-start mx-2 d-flex p-2 logo">
                <img class="img-fluid rounded  d-flex" src="../assets/img/icon.png" alt="WalterBayaLogo" />
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
