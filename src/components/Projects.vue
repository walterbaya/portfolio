<template>
  <section class="projects-section">
    <div class="projects-header">
      <h2 class="section-title">Mis Proyectos</h2>
    </div>

    <div class="projects-grid">
      <Project 
        v-for="(project, index) in processedProjects"
        :key="`project-${index}`"
        :project="project"
        class="project-card"
      />
    </div>
  </section>
</template>

<script>
import "@/assets/css/projects.css";
import Project from "./Project.vue";
import projectsData from "../assets/texts/messages.json";

export default {
  name: "Projects",
  components: { Project },
  computed: {
    processedProjects() {
      return Object.values(projectsData.projects).map(proj => ({
        ...proj[0],
        // Agregar placeholder si no hay imagen
        image: require(`@/assets/img/projects/${proj[0].image}`),
        
        // Normalizar URLs
        repoUrl: proj[0].url,
        demoUrl: proj[0].isDeployed ? proj[0].deployLink : null,
        // Generar tags automáticos
        tags: this.extractTags(proj[0].text)
      }))
    }
  },
  methods: {
    extractTags(text) {
      const techKeywords = ['Vue', 'React', 'Node', 'JavaScript', 'Java', 'MongoDB', 'AWS'];
      return [...new Set(text.match(new RegExp(techKeywords.join('|'), 'gi')) || [])];
    }
  }
}
</script>
