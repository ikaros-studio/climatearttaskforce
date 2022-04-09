<template>
  <b-row
    class="bg-continent min-vh-100 w-100 px-3"
    align-v="center"
    align-h="center"
  >
    <!-- Using components -->

    <b-col md="7" class="">
      <b-card bg-variant="transparent">
        <div class="w-100 text-left mb-4">
          <h2 class="catfont text-uppercase text-dark">
            climate art taskforce
          </h2>
        </div>
        <h5 class="text-dark font-weight-light">
          The climate art taskforce (<i>CAT</i>) is a global alliance of
          interdisciplinary digital artists against climate change. Based on an
          open source platform, <i>CAT</i> curates and publishes digital
          artworks & publications making climate change accessible and
          approachable for a non-expert audience. <i>CAT</i> invites digital
          practitioners to contribute with their own relating digital works.

          <br /><br />
          With it’s open source approach, <i>CAT</i> aims to be inclusive
          towards all kinds of artists and art formats relating to climate
          change, everyone is welcome to contribute. Selected artworks and the
          platform itself are constantly curated for external projects and
          campaigns.
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
          <b-link
            href="https://www.artconnect.com/opportunity/ul_Y02MlSssJrrvE6q0vq"
            target="_blank"
            class="font-weight-bold"
            >Be part of the taskforce</b-link
          >
        </h5></b-card
      ></b-col
    >
  </b-row>
</template>

<script>
import artworks from '../assets/js/artworks'
export default {
  data() {
    return {
      artworks: artworks,
    }
  },
}
</script>
