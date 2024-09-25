<template>
  <div class="px-0">
    <div class="row">
      <div class="mb-5 bg-dark col-12 p-4 d-flex justify-content-center align-items-center">
        <h1 class="text-white section-title">Experiencia</h1>
      </div>
    </div>
    <div class="container">
      <div class="row " v-for="experiencie in experiencies" v-bind:key="experiencie.title">
        <Experiencie :experiencie="experiencie"></Experiencie>
      </div>
    </div>
  </div>
</template>

<script>
import Experiencie from "./Experiencie.vue";
import txt from "../assets/texts/messages.json";

const exp = txt["experiencies"];

export default {
  name: "Experiencies",
  components: {
    Experiencie,
  },
  computed: {
    experiencies() {
      var temp = [];
      for (const key in exp) {
        temp.push({
          title: exp[key][0].title,
          text: exp[key][0].text,
          date: exp[key][0].date,
          image: exp[key][0].image,
        });
      }
      return temp;
    },
  },
};
</script>