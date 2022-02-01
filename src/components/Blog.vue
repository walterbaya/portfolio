<template>
  <div id="blog" class="bg-light p-4 rounded">
    <hr/>
    <div class="row">
      <div class="col-6">
        <h2 class="text-muted pb-2">Blog</h2>
        <h1 class="py-3">{{title}}</h1>
        <p class="py-2 px-1">
          {{text}}
        </p>
      </div>
      <div class="col-6">
        <img
          v-bind:alt="image"
          v-bind:src="getImage()"
          class="img-fluid w-100 rounded"
        />
      </div>
      <a class="mx-1 link-primary text-decoration-none" v-bind:href=link>blog</a>
    </div>
    <hr/>
  </div>
</template>

<script>

export default {
  name: "Blog",
  props: {
    blog: Object,
  },
  methods: {
    getImage() {
      return require("../assets/img/blogs/" + this.image);
    },
  },
  data() {
    return {
      image: this.blog.image,
      text: this.blog.text,
      link: this.blog.link,
      title: this.blog.title,
    };
  },
};
</script>