<template>
  <article class="project">
    <div class="project-image">
      <div 
        v-if="!project.image"
        class="image-placeholder"
        aria-hidden="true"
      >
        <i class="fas fa-code"></i>
      </div>
      <img 
        v-else
        :src="project.image"
        :alt="`Captura del proyecto ${project.title}`"
        loading="lazy"
      />
    </div>

    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      
      <div class="project-meta">
        <span 
          v-if="project.demoUrl"
          class="status-badge live"
        >
          <i class="fas fa-globe"></i> En vivo
        </span>
        <span class="status-badge">
          <i class="fas fa-code-branch"></i> {{ project.repoUrl ? 'Código disponible' : 'Privado' }}
        </span>
      </div>

      <p class="project-description">{{ project.text }}</p>

      <div class="project-tags">
        <span 
          v-for="tag in project.tags"
          :key="tag"
          class="tech-tag"
        >
          {{ tag }}
        </span>
      </div>

      <div class="project-actions">
        <a 
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-button demo"
        >
          Ver Demo
        </a>
        <a 
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-button code"
        >
          Ver Código
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import "@/assets/css/project.css";

export default {
  props: {
    project: {
      type: Object,
      required: true,
      validator: (proj) => {
        return 'title' in proj && 'text' in proj
      }
    }
  }
}
</script>
