<template>
  <div
    id="projects"
    class="text-white container general-container"
  >
    <div class="row">
      <div
        class="col-12 d-flex justify-content-center align-items-center"
        id="firstrow"
      >
        <i class="fas fa-project-diagram fa-2x mt-3"></i>
        <h1 class="p-2 mt-3 title">Proyectos</h1>
      </div>
    </div>
    <div class="row px-3">
      <div
        class="col-12 col-lg-6 col-xl-4"
        v-for="project in projects"
        v-bind:key="project.project"
      >
        <Project :project="project"></Project>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
import txt from "../assets/texts/messages.json";

const pro = txt["projects"];

export default {
  name: "Projects",
  computed: {
    projects() {
      var projectList = [];
      for (const key in pro) {
        projectList.push({
          title: pro[key][0].title,
          text: pro[key][0].text,
          link: pro[key][0].link,
          url:  pro[key][0].url,
          image: pro[key][0].image,
          isDeployed: pro[key][0].isDeployed,
          deployLink: pro[key][0].deployLink
        });
      }
      return projectList;
    },
  },
  components: {
    Project,
  },
};
</script>


