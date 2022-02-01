<template>
  <div id="blogs" class="bg-light p-4 px-5">
    <div class="row">
      <div class="col-12">
        <h1 class="p-4 mt-4">Blogs</h1>
      </div>
      <div class="col-12">
        <div v-for="blog in blogs" v-bind:key="blog.blog">
          <Blog :blog="blog"></Blog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "./Blog.vue";
import txt from "../assets/texts/messages.json";

const blo = txt["blogs"];

export default {
  name: "Blogs",
  computed: {
    blogs() {
      var blogList = [];
      for (const key in blo) {
        blogList.push({
          title: blo[key][0].title,
          text: blo[key][0].text,
          link: blo[key][0].link,
          image: blo[key][0].image,
        });
      }
      return blogList;
    },
  },
  components: {
    Blog,
  },
};
</script>