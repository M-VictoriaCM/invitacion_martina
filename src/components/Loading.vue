<script>
export default {
  name: 'Loading',
  data() {
    return {
      count: 6,
      rotation: 0,
      loading: true,
      countdownAudio: null
    };
  },
  computed: {
    needleStyle() {
      return {
        transform: `rotate(${this.rotation}deg)`
      };
    },
    containerClass() {
      return this.rotation % 720 === 0 ? 'background-black' : 
        this.rotation % 360 === 0 ? 'background-white' : 
        'background-gray';
    }
  },
  mounted() {
    this.updateCountdown();
  },
  methods: {
    updateCountdown() {
      if (this.count > 0) {
        this.count--;
        this.rotation += 360;
        setTimeout(this.updateCountdown, 1000);
      } else {
        this.loading = false;
        this.$emit('countdown-finished');
      }
    }
  }
};


</script>

<template>
  <div class="app-container">
    <div class="preloader" v-if="loading">
      <div class="film-countdown">
        <span id="count">{{ count }}</span>
      </div>
      <div class="hands" id="sec">
        <div class="hand needle" :style="needleStyle"></div>
      </div>
    </div>
    <div class="container" :class="containerClass">
      <div class="square1"></div>
      <div class="square2"></div>
      <div class="square3"></div>
      <div class="square4"></div>
      <div class="line"></div>
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
    </div>

    
  </div>

</template>

<style scoped>
@import '../style.css';
.app-container,
.container,
.square1,
.square2,
.square3,
.square4,
.hands  {
  width: 100%;
  height: 100%;
}
.app-container,
.line,
.preloader{
  position: fixed;
}
.app-container,
.preloader,
.film-countdown{
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-container {  
  background: radial-gradient(grey, rgb(2, 2, 2) 70%);
  top:0;
  left: 0;
  z-index: 100;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.square1,
.square2{
  border-bottom: 1px solid var(--color__font_dark);
}
.square3,
.square4{
  border-top: 1px solid var(--color__font_dark);
}
.square1,
.square3{
  border-right: 1px solid var(--color__font_dark);
}
.square2,
.square4{
  border-left: 1px solid var(--color__font_dark);
}
.circle,
.line,
.hands,
.hand,
.needle{
  position: absolute;
}
.circle {
  border-radius: 50%;
  border: 0.1rem solid var(--color_txt__light);
}
.circle1,
.circle2,
.line {
  top: 50%;
  left: 50%;
}

.circle1,
.circle2,
.line{
  transform: translate(-50%, -50%);
}

.circle1 {
  width: 370px;
  height: 370px;
}

.circle2 {
  width: 360px;
  height: 360px;
}

.line {
  z-index: -1;
}

.preloader {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.film-countdown {
  position: relative;
  width: 100%;
  z-index: 1;
}
#count{
  font-size: 250px;
  font-family: 'Albra-regular';
  color:var(--color_txt__light);
  font-weight: lighter;
  text-align: center;
}
.hands {
  top: 0;
  left: 0;
}
.hand{
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
}
.needle {
  background: var(--color__font_dark);
  height: 100%;
  width: 4px;
  border-radius: 4px;
  z-index: -1;
  transition: transform 1s linear;
}

@media screen and (max-width:320px) {
  .app-container{
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    border:1px solid salmon;
  }
  .circle1{
    width:300px;
    height: 300px;
  }
  .circle2{
    width:290px;
    height: 290px;
  }
}
/*------------- Medias queries -------------*/
@media (max-width: 600px)  {
  .app-container {
    height: 100%;
  }

  .circle1,
  .circle2,
  .line,
  .film-countdown,
  .hands {
    position: fixed;
  }
  .circle1{
    width:310px;
    height: 310px;
  }
  .circle2{
    width:300px;
    height: 300px;
  }
  .film-countdown,
  .hands{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .film-countdown {
    font-size: 200px
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .film-countdown {
    font-size: 200px;
  }
  
  .circle1 {
    width: 360px;
    height: 360px;
  }
  
  .circle2 {
    width: 350px;
    height: 350px;
  }
  
  .needle {
    width: 3px;
  }
}

/* Large desktops */
@media (min-width: 1025px) {
  .film-countdown {
    font-size: 250px;
  }
  
  .circle1 {
    width: 450px;
    height: 450px;
  }
  
  .circle2 {
    width: 440px;
    height: 440px;
  }
  
  .needle {
    width: 4px;
  }
}
</style>