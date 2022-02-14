<template>
  <p class="text-uppercase ls-lg lh-1  title ml-3">
    <b> {{ title }}</b
    ><br />
    <small class="  fw-light"> {{ author }}</small>
  </p>
</template>
<script>
export default {
  props: ['title', 'author'],
  setup () {}
}
</script>
<style>
.title {
  position: absolute !important;
  bottom: 0;
  left: 0;
}
</style>
