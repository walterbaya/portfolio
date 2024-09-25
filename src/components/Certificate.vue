<template>
  <div class="card">
    <div class="p-5">
      <a href={url} class="link">{{title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certificate",
  props: {
    title: String,
    url: String
  },
};
</script>

