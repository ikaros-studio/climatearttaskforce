<template>
  <div>
    <NavBar></NavBar>
    <Nuxt class="min-vh-100" />
    <Title
      :artwork="artworks.find((el) => el.path == this.$route.path)"
    ></Title>
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
}
</script>