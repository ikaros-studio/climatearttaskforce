<template>
  <div class="vh-100">
    <div class="d-flex w-100 overflow-auto h-100">
      <Title></Title>
      <h1 class="d-flex my-auto mx-auto align-items-start ">
        <b-link
          v-for="(artwork, index) in artworks"
          :key="index"
          :to="artwork.link"
          :class="
            'main-menu-item text-center text-uppercase font-weight-bold text-decoration-none p-0 mr-2 w-100' +
              randomBg()
          "
        >
          <img
            width="45"
            height="45s"
            class="circle mb-2"
            :src="require('~/static/img/artworks/' + artwork.img + '.jpg')"
          />
          <!-- <svg
          width="60"
            class="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
          >
            <path :style="'fill:' + artwork.iconfill" :d="artwork.icon" />
          </svg> -->
          <br />
          <span class="vertical-text">{{ artwork.title }}</span></b-link
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
