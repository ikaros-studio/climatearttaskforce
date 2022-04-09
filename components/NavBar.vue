<template>
  <div
    class="
      bg-white
      position-relative
      z-100
      border-bottom
      d-flex
      align-items-center
      justify-content-between
      py-3
      text-uppercase text-muted
    "
  >
    <b-link
      v-if="!isMobile()"
      to="/"
      class="
        d-flex
        align-items-center
        h5
        mb-0
        text-decoration-none text-muted
        mx-2
        text-uppercase
        catfont
        ml-3
      "
    >
      climate art taskforce</b-link
    >
    <b-link
      v-else
      to="/"
      class="
        h5
        mb-0
        text-decoration-none
        d-flex
        align-items-center
        text-muted
        mx-2
        text-uppercase
        catfont
        ml-3
      "
    >
      CAT</b-link
    >
    <!-- <div class=" d-none  searchbar d-lg-block w-100 mx-auto">
      <b-input-group class=" ">
        <b-form-input
          size="sm"
          placeholder="Search for an artwork, topic or more"
          class="bg-dark text-white"
        ></b-form-input>
      </b-input-group>
    </div> -->
    <div class="d-flex">
      <b-link to="/" class="text-muted mx-2 fw-light small">Artworks</b-link>
      <b-link to="/about" class="text-muted mx-2 small fw-light">About</b-link
      ><b-link
        to="/publications"
        class="fw-light text-muted ml-2 mr-3 d-flex align-items-center small"
        >Publications
      </b-link>
    </div>
  </div>
</template>
<script>
import artworks from '../assets/js/artworks'
export default {
  setup() {},

  data() {
    return {
      showdrop: false,
      artworks: artworks,
    }
  },

  methods: {
    isMobile() {
      if (process.client) {
        const width = window.innerWidth
        if (width > 700) {
          return false
        } else {
          return true
        }
      }
    },
    randomBg() {
      const colors = ['warninglink', 'primarylink', 'dangerlink']

      return colors[Math.floor(Math.random() * colors.length)]
    },
  },
}
</script>

<style scoped></style>
