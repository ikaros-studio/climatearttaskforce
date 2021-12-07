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
        <div
          class="h-100"
          @mouseover="showdrop = true"
          @mouseleave="showdrop = false"
        >
          <h4 class="fw-300 my-4">
            <b-link class="text-decoration-none text-white">
              Discover artworks<b-icon class="ml-1" icon="chevron-down"></b-icon
            ></b-link>
            <br />
          </h4>
          <div class="d-flex" v-if="showdrop">
            <div class="border rounded text-right p-3 ml-auto">
              <b-link
                class="text-decoration-none text-white d-block"
                to="/globalsealevels"
                ><b>Global sea levels</b> <small>Installation</small></b-link
              >
            </div>
          </div>
        </div>
        <div></div>
        <!-- <div class="bottom mr-3"><b-link class="mb-3">Contact</b-link></div> -->
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