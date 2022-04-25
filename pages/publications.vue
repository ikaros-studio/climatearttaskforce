<template>
  <b-row class="bg-continent my-3 min-vh-100 px-3" align-v="center" align-h="center">
    <b-col md="7"
      ><b-card
        v-for="(el, index) in publications"
        :key="index"
        border-variant=""
        bg-variant="transparent"
        no-body
        class="mb-3"
      >
        <b-card-header header-bg-variant="transparent">
          <h3 class="mb-0 d-flex align-items-center font-weight-bold">
            {{ el.title }}
          </h3></b-card-header
        >
        <b-card-body class="" body-border-variant="light">
          <span class="mb-2 d-block text-uppercase">By {{ el.author }}</span>
          {{ el.description }}
        </b-card-body>
        <b-card-footer
          footer-bg-variant="transparent"
          class="d-flex align-items-center justify-content-between"
        >
          <b-link :href="el.link" target="_blank" class="d-block"
            >Read publication<b-icon
              class="ml-1"
              icon="box-arrow-in-up-right"
            ></b-icon></b-link
          ><span class="small">{{ el.date }}</span></b-card-footer
        >
      </b-card>
      <b-card
        :key="index"
        bg-variant="transparent"
        border-variant=""
        no-body
        class="mb-3"
      >
        <b-card-header header-bg-variant="transparent">
          <h3 class="mb-0 d-flex align-items-center font-weight-bold">
            Submit your own publication.
          </h3></b-card-header
        >
        <b-card-body body-border-variant="light"
          >The climate art taskforce is constantly looking for new publication
          contributions. Shoot us a mail and we'll embed your own publications
          fitting into the project.</b-card-body
        >
        <b-card-footer
          footer-bg-variant="transparent"
          class="d-flex align-items-center justify-content-between"
        >
          <b-link href="mailto:contact@ikaros.studio" class="d-block"
            >Submit now<b-icon
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