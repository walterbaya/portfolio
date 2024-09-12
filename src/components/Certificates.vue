<template>
  <div class="d-flex flex-column container mt-md-4 mt-5">
    <div class="row rounded">
      <div class="col-12 p-1 d-flex justify-content-center align-items-center">
        <i class="fas fa-certificate fa-2x mx-2"></i>
        <h1>Certificaciones</h1>
      </div>
    </div>
    <div class="row mt-4 mx-1 mt-5">  
      <div
        class="col-12 col-md-4 p-0 p-md-2 p-lg-4 rounded"
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