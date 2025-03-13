<template>
  <section id="biography" class="biography-section">
    <!-- Encabezado con efecto parallax -->
    <div class="section-header parallax-bg">
      <h1 class="section-title">Biografía</h1>
    </div>

    <div class="container">
      <div class="content-wrapper">
        <!-- Tarjeta de presentación con efecto 3D -->
        <div class="profile-card">
          <h1 class="name-title">
            <span class="gradient-text">Walter Baya</span>
          </h1>
          <h2 class="position-subtitle">Software Developer</h2>
          
          <!-- Texto biográfico mejorado -->
          <div class="bio-text">
            <p class="lead">
              <span class="highlight">¡Hola! 👋 Soy Walter</span>
            </p>
            <p class="description">
              Apasionado desarrollador de software especializado en transformar ideas en soluciones digitales innovadoras. 
              Actualmente cursando el último cuatrimestre de la carrera de Analista de Sistemas en 
              <span class="institution">ESBA Barrio Norte</span>. <br/>Próximamente cursando Ingeniería Informática en <span class="institution">UNLAM</span>
            </p>
          </div>

          <!-- Botón con animación -->
          <div class="cta-wrapper">
            <button class="cta-button">
              <span class="cta-text">Contactar</span>
              <div class="hover-effect"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "@/assets/css/biography.css";

export default {
  name: "Biography",
};
</script>
