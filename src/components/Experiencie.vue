<template>
  <div id="experience" class="bg-light m-4 p-2 rounded">
    <div class="row">
      <div class="col-3 pt-4 pl-5">
        <img v-bind:src="getImage()" class="img-fluid w-75" alt="" />
      </div>
      <div class="col-9">
        <div class="pb-3">
          <h2>{{ experiencie.date }}</h2>
          <h1>{{ experiencie.title }}</h1>
        </div>
        <p>
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