<template>
  <div class="d-flex align-items-center">
    <div class="my-auto border border-2 rounded-100" id="p5Canvas"></div>
  </div>
</template>

<script>
export default {
  props: ['height', 'width'],
  setup () {},
  data () {
    return {}
  },
  async mounted () {
    const img = require('~/static/img/logo.png')
    const { default: P5 } = await import('p5')
    const sketch = s => {
      let img

      s.setup = () => {
        s.createCanvas(this.width, this.height)
        // img = s.loadImage(require('~/static/img/CAT_texture.jpg'))
      }

      s.draw = () => {
        s.background(255, 255, 255)
        s.noStroke()
        s.fill(242, 124, 124)
        s.circle(this.width / 2, this.height / 2, this. width)
      }
    }
    // eslint-disable-next-line no-unused-vars
    const canvas = new P5(sketch, 'p5Canvas')
  }
}
</script>
