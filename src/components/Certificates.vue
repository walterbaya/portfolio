<template>
  <div id="certificates" class="bg-dark px-5 py-4 py-md-2 px-lg-5 d-flex flex-column container general-container text-white">
    <div class="row rounded">
      <div class="col-12 p-1 d-flex justify-content-center align-items-center bg-secondary rounded border border-1">
        <img src="../assets/img/certificates-icon.svg" alt="" class="py-md-0 mt-4 logo">
        <h1 class="text-white h5 title">Certificaciones</h1>
      </div>
    </div>
    <div class="row mt-4 mx-1 m-md-0 mt-md-4 px-md-5">  
      <div
        class="col-12 col-md-6 p-0 p-md-2 p-lg-4 rounded"
        v-for="certificate in certificates"
        v-bind:key="certificate.certificate"
      >
        <Certificate :certificate="certificate"></Certificate>
      </div>
    </div>
  </div>
</template>

<script>
import Certificate from "./Certificate.vue";

export default {
  name: "Certificates",
  //Computed properties
  computed: {
    certificates() {
      const path = require.context(
        "../assets/img/certificates",
        false,
        /\.svg$/
      );
      return path.keys().map(path);
    },
  },
  components: {
    Certificate,
  },
};
</script>