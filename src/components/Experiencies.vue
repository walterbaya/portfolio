<template>
  <section class="experiences-section">
    <div class="header-section">
      <h1 class="section-title">Experiencia Profesional</h1>
    </div>

    <div class="timeline-container">
      <div 
        v-for="(experience, index) in orderedExperiences"
        :key="index"
        class="timeline-item"
        :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
      >
        <div class="timeline-content">
          <Experience :experience="experience" :index="index" />
        </div>
      </div>
      <div class="timeline-line"></div>
    </div>
  </section>
</template>

<script>
import "@/assets/css/experiencies.css";
import Experience from './Experience.vue'
import experiencesData from '../assets/texts/messages.json'

export default {
  components: { Experience },
  computed: {
    orderedExperiences() {
      return Object.values(experiencesData.experiencies)
        .map(exp => exp[0])
        .sort((a, b) => new Date(b.metadata.startDate) - new Date(a.metadata.startDate))
    }
  }
}
</script>
