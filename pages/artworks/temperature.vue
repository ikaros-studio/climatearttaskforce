<template>
  <div class="row">
    <Title></Title>
    <div class="col-lg-3 nopadding">
      <div class="image1">
        <img
          id="img1"
          :src="require('~/static/img/Irwin bushfire 1.jpg')"
          style="height: 100%; width: 100%; object-fit: contain; "
        />
      </div>
    </div>

    <div class="col-lg-6 nopadding">
      <!--<div class="image">-->
      <img
        id="img"
        :src="require('~/static/img/temperature.png')"
        style="height: 100%; width: 100%"
      />
      <!--</div>-->

      <div class="list">
        <ul class="list-group list-group-horizontal">
          <li
            v-for="(sound, index) in sounds"
            v-bind:key="index"
            class="list-group-item"
            v-bind:style="{ 'background-color': sound }"
            v-on:mouseover="applysound(index + 1)"
          ></li>
        </ul>
      </div>
    </div>

    <div class="col-lg-3 nopadding">
      <div class="image2">
        <img
          id="img2"
          :src="require('~/static/img/Irwin bushfire 2.jpg')"
          style="height: 100%; width: 100%; object-fit: contain"
        />
      </div>

      <div class="content">
        <h2>Warming Stripes</h2>
        <p>
          The progression from blue to red stripes portrays the long-term
          increase of average global temperature from 1850 to 2018.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Warming_stripes"
          class="btn"
          target="_blank"
          >Read more...</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sounds: ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple']
    }
  },
  methods: {
    applysound (index) {
      const audio = new Audio(
        require('@/assets/notes/note' + index + '.wav').default
      )
      //audio.src = ;
      //audio.load();
      audio.play()
    }
  },

  render (h) {
    return h(VueP5, { on: this })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@200&display=swap');

html {
  font-family: 'Roboto Serif';
}

.content {
  margin-left: 60px;
  object-fit: contain;
  margin-top: -400px;

  border-radius: 8px;

  font-weight: 600;
  font-family: 'Roboto Serif';
  letter-spacing: 0.5px;
  word-spacing: 4px;
}

.content a {
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  color: black;
  padding: 10px 20px;
  display: inline-block;
  letter-spacing: 2px;
}

.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}

.list-group {
  object-fit: contain;
}

.list-group-item {
  cursor: pointer;
  width: 50%;
  opacity: 0.08;
  height: auto;
  margin-top: -75%;
}

.list-group-item:active {
  opacity: 0.1;
}
</style>
