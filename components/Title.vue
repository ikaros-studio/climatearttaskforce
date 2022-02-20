<template>
  <div v-if="title" class="text-uppercase position-fixed title vertical-title mb-2 ls-lg lh-1">
    <h5 class="m-0 mr-1 ">
      <b> {{ title }}</b
      ><br />
      <span class="fw-light small"> {{ author }}</span>
    </h5>

    <!-- <b-link class="small" v-b-toggle="'collapse-2'">About</b-link>

    <b-collapse id="collapse-2">
      <small>This is the artorks description</small>
    </b-collapse> -->
  </div>
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
