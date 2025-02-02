<template>
  <section class="certificates-section">
    <div class="section-header">
      <h1 class="section-title">Certificaciones</h1>
    </div>

    <div class="container">
      <div class="certificates-grid">
        <Certificate 
          v-for="(certificate, index) in certificates"
          :key="index"
          :certificate="certificate"
        />
      </div>
    </div>
  </section>
</template>

<script>
import "@/assets/css/certificates.css";
import Certificate from "./Certificate.vue";
import txt from "../assets/texts/messages.json";

export default {
  name: "Certificates",
  components: { Certificate },
  computed: {
    certificates() {
      return txt.certificates;
    }
  }
}
</script>
