<template>
  <div class="">
    <Title></Title>
    <b-container class=" d-flex  mt-5">
      <div class="text-center w-75 mx-auto">
        <b-button size="lg" class="bg-anim font-weight-bold text-uppercase border-0 text-black"
          >Explore</b-button
        >
        <div class="my-5" v-for="(quote, index) in quotes" :key="index">
          <h5 class="fw-light mb-0">„{{ quote.content }}“</h5>
          <small class="text-muted">{{ quote.author }}</small>
          <hr class="lighthr w-50 my-5" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      quotes: [
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        },
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        },
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        },
        {
          content:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
          author: 'Alexander Doou'
        }
      ]
    }
  }
}
</script>

<style></style>
