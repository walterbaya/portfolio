<template>
  <div class="container px-0">
    <div class="row">
      <div class=" mb-5 text-light border-yellow bg-blue col-12 p-1 d-flex justify-content-center align-items-center">
        <i class="fas fa-briefcase fa-2x mx-2 text-yellow"></i>
        <h1 class="pt-2 text-dark-blue">Experiencia</h1>
      </div>
    </div>
    <div class="row px-4 py-2" v-for="experiencie in experiencies" v-bind:key="experiencie.title">
        <Experiencie :experiencie="experiencie"></Experiencie>
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