<template>
  <div
    class="bg-white position-relative z-100 border-bottom  d-flex align-items-center justify-content-end py-4 text-uppercase text-muted "
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
      >caf</b-link
    >
    <b-link to="/" class=" text-muted mx-2  fw-light small ">Artworks</b-link>
    <b-link href="" class=" text-muted mx-2 small  fw-light">About</b-link
    ><b-link href="" class=" fw-light text-muted mx-2  small"
      >Whitepaper</b-link
    >
    <b-link class="d-flex align-items-center text-muted ml-2 mr-3  fw-light small">
      NFTs</b-link
    >
    <!-- |
      <b-link to="/" class="ml-2 mr-3  text-muted ">
        <img
          class=""
          width="20"
          src="~/static/img/lgo.png"
          alt="Visualize climate change"
        />
      </b-link> -->
    <!-- <div class="text-right ml-auto introbar">
        <div class="border-left border-lighter h-100 ">
          <div class="p-4">
            <b-link
              v-b-toggle.sidebar-right
              class=" text-muted "
            >
              <img
                class=""
                width="50"
                src="~/static/img/lgo.png"
                alt="Visualize climate change"
              />
            </b-link>
            <div class="mt-3">
              <h3 class="vertical-text ml-2 mt-0 mr-0 mb-0">
                vizualize climate change
              </h3>
            </div>
          </div>
        </div>
      </div> -->

    <!-- <b-sidebar
        backdrop
        text-variant="light"
        bg-variant="transparent"
        id="sidebar-right"
        title=""
        right
        sidebar-class="border-left border-lighter text-right"
      >
        <div class=" h-100">
          <div class="px-4 ">
            <div>
              <b-navbar-brand class="mr-0 d-block mb-3" to="/">
                <img
                  width="50"
                  src="~/static/img/lgo.png"
                  alt="Visualize climate change"
                />
              </b-navbar-brand>
              <hr class="lighthr" />

              <small class="text-muted font-weight-bold"
                >VISUALIZE CLIMATE CHANGE</small
              >

              <b-link
                :class="
                  'fw-light text-uppercase  text-muted d-block ' +
                    randomBg()
                "
                to="/"
                >ABOUT</b-link
              >
              <hr class="lighthr" />
              <small class="text-muted font-weight-bold">ARTWORKS</small>

              <b-link
                v-for="(el, index) in artworks"
                :key="index"
                :class="
                  ' fw-light text-uppercase text-muted d-block ' +
                    randomBg()
                "
                :to="el.link"
                >{{ el.title }}</b-link
              >
              <hr class="lighthr" />

              <small class="text-muted font-weight-bold">MORE</small>
              <b-link
                to=""
                :class="
                  'd-block text-muted fw-light  small ' +
                    randomBg()
                "
                >CONTACT</b-link
              >
              <b-link
                to=""
                :class="
                  'd-block text-muted fw-light  small ' +
                    randomBg()
                "
              >
                WHITEPAPER</b-link
              >
              <b-link
                to=""
                :class="
                  'd-block text-muted fw-light  small ' +
                    randomBg()
                "
              >
                OPEN CALL</b-link
              >
            </div>
          </div>
        </div>
      </b-sidebar> -->
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
