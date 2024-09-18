<template>
  <div id="habilities" class="container bg-light px-0">
    <div class="row">
      <div class="col-12 bg-dark text-white d-flex justify-content-center align-items-center p-1">
        <i class="fas fa-code fa-2x mx-2"></i>
        <h1 class="py-2">Habilidades</h1>
      </div>
    </div>
    <div class="row bg-light px-2">
      <div
        class="col-4 p-md-0 my-md-0"
        v-for="hability in habilities.habilities1"
        v-bind:key="hability.hability"
      >
        <Hability :hability="hability"></Hability>
      </div>
    </div>
  </div>
</template>

<script>
import Hability from "./Hability.vue";
import txt from "../assets/texts/messages.json";

const hab = txt["habilities"];

export default {
  name: "Habilities",
  components: {
    Hability,
  },
  computed: {
    habilities() {
      var HabilitiesList = [];
      for (const key in hab) {
        HabilitiesList.push({
          image: hab[key][0].image,
          title: hab[key][0].title,
          percentage: hab[key][0].percentage,
        });
      }
      return {
        habilities1: HabilitiesList,
      };
    },
  },
};
</script>