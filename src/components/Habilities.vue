<template>
  <div id="habilities" class="container mt-md-4 mt-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center  rounded pb-4  m-md-0 p-1">
        <i class="fas fa-code p-2 fa-2x mx-2"></i>
        <!--Anteriormente se llamaba habilidades, pero ahora deberia llamarse tecnologias-->
        <h1>Habilidades</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div
        class="col-4 col-md-2 p-md-0 my-md-0"
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