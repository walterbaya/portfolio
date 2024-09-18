<template>
  <div id="certificates" class="d-flex flex-column container px-0">
    <div class="row rounded">
      <div class="col-12 bg-dark text-white p-1 d-flex justify-content-center align-items-center">
        <i class="fas fa-certificate fa-2x mx-2"></i>
        <h1 class="py-2">Certificaciones</h1>
      </div>
    </div>
    <div class="row bg-light p-4">  
      <div
        class="col-12 col-xl-4 col-md-6 rounded"
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