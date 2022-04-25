<template>
  <div>
    <NavBar></NavBar>
    <Nuxt :class="getClass()" />
    <ArtworkDescription
      :artwork="artworks.find((el) => el.path == this.$route.path)"
    ></ArtworkDescription>
    <Footer></Footer>
  </div>
</template>

<script>
import artworks from '../assets/js/artworks'

export default {
  setup() {},
  data() {
    return {
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
    getClass() {
      if (this.isMobile()) {
        return 'mobilewidth'
      } else {
        return 'desktopwidth'
      }
    },
  },
}
</script>

<style>
.mobilewidth {
  min-height: 100vh;
}

.desktopwidth {
  width: 75vw;
  min-height: 100vh;
}
</style>