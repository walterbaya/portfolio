<template>
  <div id="project" class="bg-dark d-flex justify-content-center mt-5 border border-1 p-md-0">
    <div class="card w-100">
      <img
        v-bind:alt="image"
        v-bind:src="getImage()"
        class="img-fluid w-100 card-img-top"
      />
       <ul class="d-flex justify-content-around list-unstyled card-header bg-light text-dark border-bottom">
        <li>#HTML</li>
        <li>#CSS</li>
        <li>#PHP</li>
        <li>#JAVA</li>
      </ul>
      <div class="card-body bg-light text-dark">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ text }}
        </p>
        <a href="#" class="btn btn-outline-primary btn-lg m-2 rounded">Demo</a>
        <a href="#" class="btn btn-primary btn-lg mr-2 my-2 rounded">Code</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object,
  },
  methods: {
    getImage() {
      return require("../assets/img/projects/" + this.image);
    },
  },
  data() {
    return {
      image: this.project.image,
      text: this.project.text,
      link: this.project.link,
      title: this.project.title,
    };
  },
};
</script>