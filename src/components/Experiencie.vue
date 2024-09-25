<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-12 d-flex flex-column justify-content-center">
        <div class="pb-3">
          <h1 class="experience-title">{{ experiencie.title }}</h1>
          <h2 class="experience-date">{{ experiencie.date }}</h2>
        </div>
        <p class="border-grey pb-3">
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