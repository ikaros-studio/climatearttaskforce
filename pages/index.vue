<template>
  <div class="vh-100">
    <div class="d-flex w-100 overflow-auto">
      <div
        class="h-100 bg-white text-center p-2 border border-right small text-dark  text-uppercase vertical-title ls-lg lh-1"
      >
        <b-link class="m-0 text-decoration-none">
          <i>open call for artists</i>
        </b-link>
      </div>
      <h1 class="d-flex my-auto px-2 mx-auto align-items-start ">
        <b-link
          v-for="(artwork, index) in artworks"
          :key="index"
          :disabled="artwork.soon"
          :to="artwork.path"
          :class="
            'main-menu-item text-center text-uppercase font-weight-bold text-decoration-none p-0 mr-2 w-100'
          "
        >
          <img
            :src="artwork.coverlink"
            class="menu-circle border mb-2 mt-4 p-0 d-block border border-dark "
          />

          <span :class="'vertical-text ' + randomBg()"
            >{{ artwork.title
            }}<small class="small font-italic" v-if="artwork.soon"
              >(soon)</small
            ></span
          ></b-link
        >
      </h1>
    </div>
  </div>
</template>

<script>
import artworks from '../assets/js/artworks'

export default {
  layout: 'default',
  data () {
    return {
      artworks: artworks,
      quotes: [
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        },
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        },
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        },
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        }
      ]
    }
  },
  methods: {
    randomBg () {
      const colors = ['warninglink ', 'primarylink', 'dangerlink']

      return colors[Math.floor(Math.random() * colors.length)]
    },
    randomFontSize () {
      const size = Math.floor(Math.random() * (70 - 20)) + 10
      return size
    },
    getIcon () {
      return '../static/svg/droplet.svg'
    }
  }
}
</script>

<style></style>
