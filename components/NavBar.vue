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
              Discover artworks<b-icon class="ml-1" icon="chevron-down"></b-icon
            ></b-link>
            <br />
          </h5>
    <b-sidebar class="" text-variant="light" bg-variant="transparent" id="sidebar-right" title="" right >
    <div class=" h-100">
      <div class="px-3  py-2">
        <div>
         <b-link
                class="text-decoration-none text-white d-block"
                to="/globalsealevels"
                >Global sea levels <small>Vizualization</small></b-link
              >
              <hr class="my-2" />
              <b-link
                class="text-decoration-none text-white d-block"
                to="/globalsealevels"
                >Project 2 <small>Vizualization</small></b-link
              >
              <hr class="my-2 text-light" />
              <b-link
                class="text-decoration-none text-white d-block"
                to="/globalsealevels"
                >Project 3 <small>Vizualization</small></b-link
              ></div>

               <div class="mt-5 mb-3 text-right">
      <b-link class="d-block text-white font-weight-light small ">Contact  @</b-link>
      <b-link class="d-block text-white font-weight-light small">
        Read the whitepaper <b-icon class="" icon="file-text"></b-icon
      ></b-link>
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
  setup() {},
  data() {
    return {
      showdrop: false,
    }
  },
}
</script>

<style scoped>
</style>