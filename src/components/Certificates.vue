<template>
  <div class="d-flex flex-column container px-0">
    <div class="row">
      <div class="col-12 bg-dark text-white p-4 d-flex justify-content-center align-items-center">
        <h1 class="text-white text-center section-title">Certificaciones</h1>
      </div>
    </div>
    <div class="row py-5">  
      <div
        class="col-12"
        v-for="certificate in certificates"
        v-bind:key="certificate.title"
      > 
        <Certificate :title="certificate.title" :url="certificate.url"></Certificate>
      </div>
    </div>
  </div>
</template>

<script>
import txt from "../assets/texts/messages.json";
import Certificate from "./Certificate.vue";

const exp = txt["certificates"];

export default {
  name: "Certificates",
  components: {
    Certificate,
  },
  computed: {
    certificates() {
      return exp;
    },
  },
};
</script>