<template>
  <article class="experience-card">
    <div class="card-header">
      <div class="logo-date-container">
        <img 
          :src="imagePath" 
          :alt="experience.title" 
          class="company-logo"
        />
        <div class="date-container">
          <time class="start-date">{{ formattedStartDate }}</time>
          <span class="date-separator">—</span>
          <time class="end-date">{{ formattedEndDate }}</time>
        </div>
      </div>
      <h3 class="position-title">{{ experience.title }}</h3>
      <div class="location-tag">
        <i class="fas fa-map-marker-alt"></i>
        {{ experience.metadata.location }}
      </div>
    </div>

    <div class="card-body">
      <p class="description">{{ experience.text }}</p>
      
      <div v-if="experience.details" class="details">
        <h4>Principales responsabilidades:</h4>
        <ul>
          <li v-for="(detail, idx) in experience.details" :key="idx">
            {{ detail }}
          </li>
        </ul>
      </div>

      <div class="tech-stack">
        <h4>Tecnologías utilizadas:</h4>
        <div class="tech-tags">
          <span 
            v-for="tech in experience.techStack"
            :key="tech"
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import "@/assets/css/experience.css";

export default {
  props: {
    experience: {
      type: Object,
      required: true
    }
  },
  computed: {
    imagePath() {
      try {
        return require(`@/assets/img/experiencies/${this.experience.image}`)
      } catch {
        return ""
      }
    },
    formattedStartDate() {
      return new Date(this.experience.metadata.startDate).toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'short'
      })
    },
    formattedEndDate() {
      return this.experience.metadata.endDate 
        ? new Date(this.experience.metadata.endDate).toLocaleDateString('es-AR', {
            year: 'numeric',
            month: 'short'
          })
        : 'Actualidad'
    }
  }
}
</script>
