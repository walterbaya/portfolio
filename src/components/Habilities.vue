<template>
  <div id="habilities" class="container my-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center  rounded pb-4  m-md-0">
        <i class="fas fa-code p-2 fa-2x mt-4"></i>
        <h1 class="mt-4 p-2 title">Habilidades</h1>
      </div>
    </div>
    <div class="row pb-2  pt-5 px-0">
      <div
        class="col-4 col-md-3 my-4 p-md-0 my-md-0"
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