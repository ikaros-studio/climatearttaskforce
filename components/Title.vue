<template>
  <div
    v-b-tooltip.html.hover.right
    variant="dark"
    :title="artwork.description"
    v-if="artwork"
    class="h-100 bg-white text-center z-50 px-2 border border-right small text-dark  text-uppercase vertical-title ls-lg lh-1"
  >
    <p class="m-0">
    
        <b> {{ artwork.title }}</b> | {{ artwork.artist }}
    </p>

    <!-- <b-link class="small" v-b-toggle="'collapse-2'">About</b-link>

    <b-collapse id="collapse-2">
      <small>This is the artorks description</small>
    </b-collapse> -->
  </div>
</template>
<script>
import artworks from '../assets/js/artworks'
export default {
  setup () {},
  data () {
    return {
      artwork: artworks.find(el => el.path == this.$route.path)
    }
  }
}
</script>
<style>
.title {
  position: absolute !important;
  bottom: 0;
  left: 0;
}
</style>
