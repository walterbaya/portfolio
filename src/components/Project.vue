<template>
  <div
    class="d-flex mt-5 rounded pb-4 h-100"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card w-100 d-flex justify-content-center align-items-stretch">
      <img v-bind:alt="image" v-bind:src="getImage()" class="img-fluid w-100" />
      <div class="p-4 d-none">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        <div class="d-flex justify-content-start">
          <a :href="this.link" class="btn btn-primary rounded align-middle text-center">Código</a>
          <a  
          v-bind:href="this.deployLink" class="btn btn-outline-primary mx-2 rounded align-middle text-center" v-show="isDeployed">Visita el sitio</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object,
  },
  methods: {
    getImage() {
      return require("../assets/img/projects/" + this.image);
    },
  },
  data() {
    return {
      image: this.project.image,
      text: this.project.text,
      link: this.project.link,
      title: this.project.title,
      isDeployed: this.project.isDeployed,
      deployLink: this.project.deployLink,
      hover: false
    };
  },
};
</script>