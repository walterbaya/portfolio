<template>
  <div id="experiencies" class="bg-light rounded p-5 ">
    <div class="row px-5">
      <div class="col-12 px-5">
        <div v-for="experiencie in experiencies" v-bind:key="experiencie.title">
          <Experiencie :experiencie="experiencie"></Experiencie>
        </div>
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
          link: exp[key][0].link,
          image: exp[key][0].image,
        });
      }
      return temp;
    },
  },
};
</script>