<template>
  <div class="card p-3 mb-3">
    <div>
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

