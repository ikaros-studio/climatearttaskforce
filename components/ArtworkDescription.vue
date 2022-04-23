<template>
  <div v-if="artwork">
    <div
      variant="dark"
      class="
        h-100
        bg-white
        text-center
        z-50
        px-2
        border border-right
        small
        text-dark text-uppercase
        description-box
        ls-lg
        lh-1
        pt-5
      "
    >
      <p class="m-0 mt-2">
        <b> {{ artwork.title }}</b> | {{ artwork.artist }},
        {{ artwork.country }}
      </p>

      <!-- <b-link class="small" v-b-toggle="'collapse-2'">About</b-link>

    <b-collapse id="collapse-2">
      <small>This is the artorks description</small>
    </b-collapse> -->
    </div>
    <b-button
      v-b-modal="'description-modal'"
      size="sm"
      variant="outline-dark"
      class="position-fixed m-2 small rounded-sm"
      style="right: 0; bottom: 0"
    >
      <b-icon icon="info-circle"></b-icon> About this artwork
    </b-button>
    <b-modal
      no-fade
      header-bg-variant="dark"
      body-bg-variant="dark"
      footer-bg-variant="dark"
      content-class="border-light"
      no-stacking
      centered
      class="border-light"
      size="lg"
      :id="'description-modal'"
    >
      <template #modal-header="{ close }">
        <p
          class="mb-0 d-flex align-items-center text-white text-uppercase ls-lg"
        >
          <b>{{ artwork.title }}</b
          >, <span class="mr-1">{{ artwork.artist }} </span>
          <country-flag
            class="rounded"
            :country="artwork.country"
            size="small"
          />
        </p>
        <b-icon
          @click="close()"
          class="ml-auto h5 text-white position-relative mb-0"
          icon="x"
        ></b-icon
      ></template>
      <small class="text-light font-weight-light">{{
        artwork.description
      }}</small>
      <template #modal-footer>
        <div class="w-100 text-left">
          <b-link class="small"
            >Artist Website<b-icon
              :href="artwork.artistwebsite"
              target="_blank"
              class="ml-1"
              icon="box-arrow-in-up-right"
            ></b-icon
          ></b-link>
          <b-link
            class="small ml-3"
            :href="artwork.artistinstagram"
            target="_blank"
            >Instragram<b-icon
              class="ml-1"
              icon="box-arrow-in-up-right"
            ></b-icon
          ></b-link>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Vue from 'vue'
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)
import artworks from '../assets/js/artworks'
export default {
  components: {
    CountryFlag,
  },
  setup() {},
  props: ['artwork'],
  data() {
    return {
      showdescription: false,
    }
  },
  methods: {},
}
</script>
<style>
.title {
  position: absolute !important;
  bottom: 0;
  left: 0;
}

.description-box {
  position: fixed !important;
  bottom: 0;
  right: 0;
}
</style>
