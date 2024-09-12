<template>
  <div
    class="container my-md-4 my-5 bg-white cubes"
  >
    <div class="row">
      <div
        class="col-12 p-1 d-flex justify-content-center align-items-center"
      >
        <i class="fas fa-project-diagram fa-2x mx-2"></i>
        <h1>Proyectos</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div
        class="col-12 col-md-4"
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


