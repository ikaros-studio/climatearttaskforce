<template>
  <div>
    <div class="navbar">
      <div class="text-right mt-5 mr-3">
        <div class="d-flex align-items-center">
          <nuxt-link class="text-decoration-none d-flex text-white" to="/">
            <h1 class="ml-auto font-weight-bold">
              visualize<br />climate change
            </h1>
            <img class="ml-3" height="100" width="" src="~/static/img/lgo.png"
          /></nuxt-link>
        </div>
        <h5 v-b-toggle.sidebar-right class="fw-300 my-4">
          <b-link class="text-decoration-none text-white">
            Discover artworks<b-icon
              class="ml-1"
              icon="arrow-bar-right"
            ></b-icon
          ></b-link>
          <br />
        </h5>
        <b-sidebar
          backdrop
          text-variant="light"
          bg-variant="transparent"
          id="sidebar-right"
          title=""
          right
          sidebar-class="border-left border-lighter"
        >
          <div class=" h-100">
            <div class="px-4  py-2">
              <div>
                <b-navbar-brand class="mr-0 d-block mb-3" href="#">
                  <img width="50" src="~/static/img/lgo.png" alt="Visualize climate change" />
                </b-navbar-brand>
                <hr class="lighthr" />

                <small class="text-muted font-weight-bold">VISUALIZE CLIMATE CHANGE</small>

                <b-link
                  :class="
                    'fw-light text-uppercase text-decoration-none text-white d-block ' +
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
                    'text-decoration-none fw-light text-uppercase text-white d-block ' +
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
                    'd-block text-white fw-light text-decoration-none small ' +
                      randomBg()
                  "
                  >CONTACT</b-link
                >
                <b-link
                  to=""
                  :class="
                    'd-block text-white fw-light text-decoration-none small ' +
                      randomBg()
                  "
                >
                  WHITEPAPER</b-link
                >
                <b-link
                  to=""
                  :class="
                    'd-block text-white fw-light text-decoration-none small ' +
                      randomBg()
                  "
                >
                  OPEN CALL</b-link
                >
              </div>
            </div>
          </div>
        </b-sidebar>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {},
  data () {
    return {
      showdrop: false,
      artworks: [
        {
          title: 'Global sea levels',
          artist: 'Alexander Doudkin',
          link: '/globalsealevels'
        },
        {
          title: 'TBD',
          artist: 'Alexander Doudkin',
          link: '/globalsealevels'
        },
        {
          title: 'TBD',
          artist: 'Alexander Doudkin',
          link: '/globalsealevels'
        }
      ]
    }
  },
  methods: {
    randomBg () {
      const colors = ['warninglink', 'primarylink', 'dangerlink']

      return colors[Math.floor(Math.random() * colors.length)]
    }
  }
}
</script>

<style scoped></style>
