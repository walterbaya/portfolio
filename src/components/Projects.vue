<template>
  <div
    class="container bg-yellow px-0"
  >
    <div class="row">
      <div
        class="col-12 p-1 d-flex justify-content-center align-items-center bg-blue  border-yellow text-white"
      >
        <i class="fas fa-project-diagram fa-2x mx-2 text-yellow"></i>
        <h1 class="pt-2 text-dark-blue">Proyectos</h1>
      </div>
    </div>
    <div class="row bg-light px-4">
      <div
        class="col-12 col-xl-4 col-md-6 px-3"
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


