<template>
  <b-row
    class="bg-continent min-vh-100 w-100 px-3"
    align-v="center"
    align-h="center"
  >
    <b-col md="7"
      ><b-card
        v-for="(el, index) in publications"
        :key="index"
        text-variant="light"
        border-variant="light"
        bg-variant="dark"
        no-body
        class="mb-3"
      >
        <b-card-header header-border-variant="light">
          <h3
            class="mb-0 d-flex align-items-center text-white font-weight-bold"
          >
            {{ el.title }}
          </h3></b-card-header
        >
        <b-card-body class="" body-border-variant="light">
          <span class="mb-2 d-block text-uppercase">By {{ el.author }}</span>
          {{ el.description }}
        </b-card-body>
        <b-card-footer
          class="d-flex align-items-center justify-content-between"
          footer-border-variant="light"
        >
          <b-link class="d-block"
            >Read publication<b-icon
              :href="el.link"
              target="_blank"
              class="ml-1"
              icon="box-arrow-in-up-right"
            ></b-icon></b-link
          ><span class="small">{{ el.date }}</span></b-card-footer
        >
      </b-card>
      <b-card
        :key="index"
        text-variant="light"
        border-variant="light"
        bg-variant="dark"
        no-body
        class="mb-3"
      >
        <b-card-header header-border-variant="light">
          <h3
            class="mb-0 d-flex align-items-center text-white font-weight-bold"
          >
            Submit your own publication.
          </h3></b-card-header
        >
        <b-card-body body-border-variant="light"
          >The climate art taskforce is constantly looking for new publication
          contributions. Shoot us a mail and we'll embed your own publications
          fitting into the project.</b-card-body
        >
        <b-card-footer
          class="d-flex align-items-center justify-content-between"
          footer-border-variant="light"
        >
          <b-link class="d-block"
            >Submit now<b-icon
              href="mailto:contact@ikaros.studio"
              class="ml-1"
              icon="box-arrow-in-up-right"
            ></b-icon></b-link
        ></b-card-footer> </b-card
    ></b-col>
  </b-row>
</template>

<script>
import publications from '~/assets/js/publications'

export default {
  setup() {},
  data() {
    return {
      publications: publications,
    }
  },
}
</script>