<template>
  <div id="experience" class="container">
    <div class="row">
      <div class="col-md-2  col-3 d-flex  justify-content-center align-items-center">
        <img v-bind:src="getImage()" class=" p-xl-3 img-fluid w-100" />
      </div>
      <div class="col-md-10 col-12 d-flex flex-column justify-content-center">
        <div class="pb-3">
          <h2 class="h5">{{ experiencie.date }}</h2>
          <h1 class="h3">{{ experiencie.title }}</h1>
        </div>
        <p >
          {{ experiencie.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiencie",
  props: {
    experiencie: Object,
  },
  methods: {
    getImage() {
      return require("../assets/img/experiencies/" + this.experiencie.image);
    },
  },
};
</script>