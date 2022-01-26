<template>
  <div v-if="title" class="title border rounded-sm p-2 ml-4 mb-3 text-center">
    <p class="mb-0">{{ title }}</p>
    <small>{{ author }}</small>
  </div>
</template>
<script>
export default {
  props: ['title', 'author'],
  setup() {},
}
</script>
<style>
.title {
  position: absolute !important;
  bottom: 0;
  left: 0;
}
</style>