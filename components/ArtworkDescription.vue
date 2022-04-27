<template>
  <div>
    <div v-if="artwork">
      <div v-if="!isMobile()" class="pt-5">
        <div
          v-if="artwork"
          variant="dark"
          class="
            p-4
            overflow-auto
            h-100
            bg-white
            z-50
            px-2
            border border-right
            lh-1
            text-dark
            description-box
            pt-5
            mt-5
          "
        >
          <p class="mt-4">
            {{ artwork.artist }} ({{ artwork.country }}),
            <b> {{ artwork.title }}</b>
          </p>
          <hr />
          <small class="fw-light">{{ artwork.description }}</small>
          <hr />
          <div class="w-100 text-left">
            <b-link target="_blank" :href="artwork.artistwebsite" class="small"
              >Artist Website<b-icon
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
        </div>
      </div>
      <!-- FOR MOBILE USERS -->
      <div v-if="isMobile()">
        <div class="description-box-phone w-100 px-3 z-100 small">
          <p class="mt-5">
            {{ artwork.artist }} ({{ artwork.country }}),
            <b> {{ artwork.title }}</b>
          </p>
          <hr />
          <small class="fw-light">{{ artwork.description }}</small>
          <hr />
          <div class="w-100 mb-3 text-left">
            <b-link target="_blank" :href="artwork.artistwebsite" class="small"
              >Artist Website<b-icon
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
        </div>
      </div>
    </div>
    <div
      v-else-if="!artwork && !isMobile()"
      variant="dark"
      class="
        p-4
        overflow-auto
        h-100
        bg-white
        z-50
        px-2
        border border-right
        lh-1
        text-dark
        description-box
        pt-5
        mt-5
      "
    >
      <p class="mt-5 catfont text-uppercase text-dark">
        The climate art taskforce
      </p>
      <small class="fw-light"
        >The climate art taskforce (<i>CAT</i>) is a global alliance of
        interdisciplinary digital artists against climate change. Based on an
        open source platform, <i>CAT</i> curates and publishes digital artworks
        & publications making climate change accessible and approachable for a
        non-expert audience. <i>CAT</i> invites digital practitioners to
        contribute with their own relating digital works.

        <br /><br />
        With it’s open source approach, <i>CAT</i> aims to be inclusive towards
        all kinds of artists and art formats relating to climate change,
        everyone is welcome to contribute. Selected artworks and the platform
        itself are constantly curated for external projects and campaigns.
        <br />
        <br />
        The source code is available through
        <b-link
          href="https://github.com/ikarosstudios/climatearttaskforce"
          target="_blank"
          class="d-inline"
          >www.github.com/ikarosstudios/climatearttaskforce</b-link
        >
        <br />
        <br />All submissions are welcomed through
        <b-link href="mailto:contact@ikaros.studio" target="_blank"
          >contact@ikaros.studio</b-link
        >
        or direct repository pull requests.
        <br />
        <br />
      </small>
      <hr />
      <b-button
        variant="outline-dark"
        size="sm"
        href="https://www.artconnect.com/opportunity/ul_Y02MlSssJrrvE6q0vq"
        target="_blank"
        class="rounded-0 text-uppercase border-danger text-decoration-none"
        >Be part of the taskforce</b-button
      >
    </div>
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
  },
}
</script>
<style>
.description-box {
  position: fixed !important;
  margin-top: 2;
  bottom: 0;
  right: 0;
  max-width: 25vw;
}

.description-box-phone {
  margin-top: -25vh;
}
</style>
