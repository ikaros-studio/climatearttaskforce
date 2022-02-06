<template>
  <div>
    <div class="d-flex">
      <div class="text-right ml-auto introbar">
        <!-- <div class="d-flex align-items-center">
          <nuxt-link class="text-decoration-none d-flex text-white" to="/">
            <h1 class="ml-auto font-weight-bold">
              visualize<br />climate change
            </h1>
            <img class="ml-3" height="100" width="" src="~/static/img/lgo.png"
          /></nuxt-link>
        </div> -->
        <div class="border-left border-lighter h-100 ">
          <div class="p-4">
            <b-link
              v-b-toggle.sidebar-right
              class="text-decoration-none text-white "
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
      </div>

      <b-sidebar
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
          link: '/artworks/globalsealevels'
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
