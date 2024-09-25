<template>
  <div
    class="d-flex justify-content-center py-3 px-2"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="row w-100 d-flex justify-content-center">
      <div class=" card col-12 px-0 py-3 d-flex flex-column justify-content-between">
        <!--<picture><img v-bind:alt="image" v-bind:src="getImage()" class="img-fluid" /></picture>-->
        <div class="px-4">
        <h5 class="card-title text-center text-dark-blue">{{ title }}</h5>
        <p class="card-text text-center">{{ text }}</p>
      </div>
        <div class="d-flex justify-content-center align-items-end py-2">
          <a :href="this.link" class="px-2">Código</a>
          <a  v-bind:href="this.deployLink" class="px-2" v-show="isDeployed">Visitar</a>
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