<template>
  <div id="hability" class="m-2 m-md-0 h-100 mx-md-2 my-md-1 p-3">
    <div class="d-flex align-content-center justify-content-center">
      <img
        id="certificateImage"
        v-bind:src="getImage()"
        class="img-fluid w-100"
        alt=""
      />
    </div>
    <p class="p-1 color-greyblue text-center">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Hability",
  props: {
    hability: Object,
  },
  methods: {
    getImage() {
      return require("../assets/img/habilities/" + this.image);
    },
  },
  data() {
    return {
      image: this.hability.image,
      title: this.hability.title,
      percentage: this.hability.percentage,
    };
  },
};
</script>