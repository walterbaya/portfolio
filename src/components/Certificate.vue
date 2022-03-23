<template>
  <div class="card m-2" id="certificate">
    <img
      id="certificateImage"
      v-bind:src="image.src"
      class="card-img img-fluid w-100"
      alt=""
    />
    <div class="card-img-overlay" id="text">
      <h5 class="card-title">{{ image.title }}</h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem
        esse quae et. Blanditiis optio perferendis voluptates aliquid
      </p>
    </div>
  </div>
</template>

<script>
function getCleanTitle(title) {
  var cleanTitle = title.replaceAll("-", ": ");
  cleanTitle = cleanTitle.replaceAll("_", " ");
  cleanTitle = cleanTitle.substring(5);
  cleanTitle = cleanTitle.split(".")[0];
  return cleanTitle;
}

function convertImageToJSON(value) {
  return { src: value, title: getCleanTitle(value) };
}

export default {
  name: "Certificate",
  props: {
    certificate: String,
  },
  data() {
    return {
      image: convertImageToJSON(this.certificate),
    };
  },
};
</script>

