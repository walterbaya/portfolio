<template>
  <article class="certificate-card">
    <a 
      :href="certificate.url"
      target="_blank"
      rel="noopener noreferrer"
      class="certificate-link"
    >
      <div class="certificate-content">
        <div class="certificate-icon">
          <i class="fas fa-certificate"></i>
        </div>
        <h3 class="certificate-title">{{ certificate.title }}</h3>
        <div class="certificate-hover">
          <span>Ver Certificado</span>
          <i class="fas fa-external-link-alt"></i>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
import "@/assets/css/certificate.css";

export default {
  name: "Certificate",
  props: {
    certificate: {
      type: Object,
      required: true
    }
  }
}
</script>
