<template>
  <div
    class="bg-white position-relative z-100 border-bottom  d-flex align-items-center justify-content-end py-3 text-uppercase text-muted "
  >
    <b-link
      v-if="!isMobile()"
      to="/"
      class="d-flex align-items-center h5 mb-0 text-decoration-none text-muted mx-2 text-uppercase catfont mr-auto ml-3 "
    >
      <b-img height="14" class="mr-1" src="~/static/img/logo.png"></b-img>
      climate art taskforce</b-link
    >
    <b-link
      v-else
      to="/"
      class="h5 mb-0 text-decoration-none d-flex align-items-center text-muted mx-2 text-uppercase catfont mr-auto ml-3 "
    >
      <b-img height="14" class="mr-1" src="~/static/img/logo.png"></b-img
      >CAT</b-link
    >
    <b-link to="/" class=" text-muted mx-2  fw-light small ">Artworks</b-link>
    <b-link to="/about" class=" text-muted mx-2 small  fw-light">About</b-link
    ><b-link href="" class=" fw-light text-muted ml-2 mr-3  small"
      >Publications <b-badge class="small bg-anim">soon</b-badge></b-link
    >
  </div>
</template>
<script>
import artworks from '../assets/js/artworks'
export default {
  setup () {},
  data () {
    return {
      showdrop: false,
      artworks: artworks
    }
  },

  methods: {
    isMobile () {
      if (process.client) {
        const width = window.innerWidth
        if (width > 700) {
          return false
        } else {
          return true
        }
      }
    },
    randomBg () {
      const colors = ['warninglink', 'primarylink', 'dangerlink']

      return colors[Math.floor(Math.random() * colors.length)]
    }
  }
}
</script>

<style scoped></style>
