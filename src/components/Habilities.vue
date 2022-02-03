<template>
  <div id="habilities" class="px-5 py-2 bg-seagrey text-white container general-container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center  rounded pb-4  m-md-0 py-2 color-greyblue">
        <i class="fas fa-code mt-3 p-2 fa-3x"></i>
        <h1 class="color-greyblue mt-4 p-2 title">Habilidades</h1>
      </div>
    </div>
    <div class="row p-2 mt-4 px-md-5">
      <div
        class="col-4 col-md-3 my-3 p-1 p-md-0 my-md-0"
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