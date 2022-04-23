<template>
  <div class="w-100 d-flex overflow-hidden">
    <div class="vh-100" id="p5Canvas"></div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      wavinessX: 35,
      wavinessY: 25,
      periodX: 60, // smaller number = more
      periodY: 60,
    }
  },
  created() {
    setInterval(() => {
      this.wavinessX++
    }, 500)
  },

  async mounted() {
    const { default: P5 } = await import('p5')
    const sketch = (s) => {
      // settings to control the distort filter
      // (tbh, not really understanding how these values
      // interact – try playing with them!)
      // let wavinessX = 10 // smaller number = fewer repetitions

      let img
      s.preload = () => {
        img = s.loadImage(require('~/static/img/artworks/meltingworld/map.jpg'))
      }
      s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerWidth)
        img.resize(window.innerWidth, 0)
        s.pixelDensity(3)
      }

      s.draw = () => {
        s.noLoop()

        // img = distort(
        //   img,
        //   this.wavinessX,
        //   this.wavinessY,
        //   this.periodX,
        //   this.periodY
        // )

        img.loadPixels()
        for (let y = 0; y < img.height; y++) {
          for (let x = 0; x < img.width; x++) {
            // this formula is where the magic happens!
            // we calculate new x/y position and grab pixels
            // from the source image at that location
            //s.noLoop()
            let tempX = x + this.wavinessX * s.sin(x / this.periodX)
            let tempY = y + this.wavinessY * s.sin(y / this.periodY)
            let px = img.get(tempX, tempY)

            // then put those colors into the output
            // image at the regular x/y position
            img.set(x, y, px)
          }
        }
        img.updatePixels()
        s.image(img, 0, 0)
        this.wavinessX++
      }
      function distort(input, wavinessX, wavinessY, periodX, periodY) {
        //  s.noLoop()
        let output = s.createImage(input.width, input.height)
        input.loadPixels()
        output.loadPixels()
        for (let y = 0; y < input.height; y++) {
          for (let x = 0; x < input.width; x++) {
            // this formula is where the magic happens!
            // we calculate new x/y position and grab pixels
            // from the source image at that location
            s.noLoop()
            let tempX = x + wavinessX * s.sin(x / periodX)
            let tempY = y + wavinessY * s.sin(y / periodY)
            let px = input.get(tempX, tempY)

            // then put those colors into the output
            // image at the regular x/y position
            output.set(x, y, px)
          }
        }
        output.updatePixels()
        // Load the pixels
        return output
      }
    }
    // eslint-disable-next-line no-unused-vars
    const canvas = new P5(sketch, 'p5Canvas')
  },
  methods: {},
}
</script>