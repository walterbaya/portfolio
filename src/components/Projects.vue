<template>
<!--px-5 -->
  <div id="projects" class="bg-white general-container container py-2">
    <div class="row ">
      <div
        class="
          col-12
          d-flex
          justify-content-center
          align-items-center
          bg-light
          border border-1
        "
        id="firstrow"
      >
        <img
          src="../assets/img/projects.svg"
          alt=""
          class="logo w-25 h-50 mt-3"
        />
        <h1 class="text-dark bg-light title">Proyectos</h1>
      </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-4" v-for="project in projects" v-bind:key="project.project">
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
          image: pro[key][0].image,
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


