<template>
  <div class="w-100  overflow-hidden">
    <Title :title="'sea levels'" :author="'Alexander Doudkin'"></Title>
    <div class="vh-100 " id="p5Canvas"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city1: 'Ale2x',
      input: null,
      cities: [
        {
          city: 'Amsterdam',
          elevation: -2
        },
        {
          city: 'Santo Domingo',
          elevation: 0
        },
        {
          city: 'Panama City',
          elevation: 0
        },
        {
          city: 'Algiers',
          elevation: 0
        },
        {
          city: 'Djibouti',
          elevation: 0
        },
        {
          city: 'Libreville',
          elevation: 0
        },
        {
          city: 'Banjul',
          elevation: 0
        },
        {
          city: 'Conakry',
          elevation: 0
        },
        {
          city: 'Bissau',
          elevation: 0
        },
        {
          city: 'Monrovia',
          elevation: 0
        },
        {
          city: 'Tunis',
          elevation: 0
        },
        {
          city: 'Bangkok',
          elevation: 1
        },
        {
          city: 'Paramaribo',
          elevation: 1
        },
        {
          city: 'Nassau',
          elevation: 2
        },
        {
          city: 'Washington D.C.',
          elevation: 2
        },
        {
          city: 'Dhaka',
          elevation: 3
        },
        {
          city: 'Jakarta',
          elevation: 3
        },
        {
          city: 'Colombo',
          elevation: 4
        },
        {
          city: 'Havana',
          elevation: 4
        },
        {
          city: 'Kuwait City',
          elevation: 5
        },
        {
          city: 'Taipei',
          elevation: 5
        },
        {
          city: 'Chennai',
          elevation: 6
        },
        {
          city: 'Pyongyang',
          elevation: 6
        },
        {
          city: 'Luanda',
          elevation: 6
        },
        {
          city: 'Tripoli',
          elevation: 6
        },
        {
          city: 'Nouakchott',
          elevation: 6
        },
        {
          city: 'Manila',
          elevation: 7
        },
        {
          city: 'Dublin',
          elevation: 8
        },
        {
          city: 'Riga',
          elevation: 8
        },
        {
          city: 'Copenhagen',
          elevation: 10
        },
        {
          city: 'Buenos Aires',
          elevation: 10
        },
        {
          city: 'Dili',
          elevation: 11
        },
        {
          city: 'Oslo',
          elevation: 12
        },
        {
          city: 'Brussels',
          elevation: 13
        },
        {
          city: 'Doha',
          elevation: 13
        },
        {
          city: 'Abu Dhabi',
          elevation: 13
        },
        {
          city: 'Rome',
          elevation: 14
        },
        {
          city: 'London',
          elevation: 14
        },
        {
          city: 'Lisbon',
          elevation: 15
        },
        {
          city: 'Stockholm',
          elevation: 15
        },
        {
          city: 'Phnom Penh',
          elevation: 15
        },
        {
          city: 'Tokyo',
          elevation: 17
        },
        {
          city: 'Ho Chi Minh City',
          elevation: 19
        }
      ]
    }
  },
  async mounted () {
    const { default: P5 } = await import('p5')
    const sketch = s => {
      let yoff = 0.2 // 2nd dimension of perlin noise

      s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight)
      }

      s.draw = () => {
        s.randomSeed(25)
        s.background(255)
        s.noStroke()
        for (let i = 0; i <= 5; i++) {
          s.fill(s.random(200), s.random(200), s.random(200), 100)
          s.beginShape()
          let xoff = 0 + i * 2

          for (let x = 0; x <= s.width + 30; x += 25) {
            let y = s.map(
              s.noise(xoff, yoff),
              0,
              1,
              s.height / 2 - 140,
              s.height / 2 + 120
            )
            //var y = s.noise(0.003)
            s.vertex(x, y)
            xoff += 0.05
          }

          s.vertex(s.width, s.height)
          s.vertex(0, s.height)
          s.endShape()
        }
        // Loop through cities
        for (let i = 0; i < this.cities.length; i++) {
          let off = s.random(5)
          let y = s.map(
            s.noise(off, yoff),
            0,
            1,
            s.height / 2 - 120,
            s.height / 2 + 140
          )
          s.fill(255, 255, 255, 100)
          s.noStroke()
          let x = 50 + s.random(s.width - 200)
          s.circle(x - 8, y - 4, 10)
          s.text(this.cities[i].city, x, y)
        }
        yoff += 0.002
      }
    }
    // eslint-disable-next-line no-unused-vars
    const canvas = new P5(sketch, 'p5Canvas')
  },

  render (h) {
    return h(VueP5, { on: this })
  }
}
</script>
