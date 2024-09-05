<template>
  <div class="card m-2" id="certificate">
    <img
      id="certificateImage"
      v-bind:src="image.src"
      class="card-img img-fluid w-100"
      alt=""
    />
    <div class="card-img-overlay d-none" id="text">
      <h5 class="card-title">{{ image.title }}</h5>
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

