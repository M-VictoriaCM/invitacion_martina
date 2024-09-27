<script>
import { ref } from 'vue';
import Loading from './components/Loading.vue';
import Film from './components/icons/Film.vue';
export default{
  name:'App',
  components:{
    Loading,
    Film
  },
  
  methods:{
    async handleMusicPlay() {
      if (!this.audio) {
        this.audio = new Audio((await import('./assets/music/Taylor-Swift_Fifteen.mp3')).default);
      }
      this.audio.play();
      this.isPlaying = true;
      this.musicActive=true;
    },
    handleMusicPause() {
      if (this.audio) {
        this.audio.pause();
        this.isPlaying = false;
      }
    },
    handleMusicToggle() {
      if (this.audio) {
        if (this.isPlaying) {
          this.handleMusicPause();
        } else {
          this.handleMusicPlay();
        }
      }
    },
    handleMusicStop(){
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.musicActive = false;
      }
    },
    handleVisibilityChange() {
      if (document.hidden && this.isPlaying) {
        this.handleMusicPause();
      }
    }
  },
  provide() {
    return {
      audioController: {
        play: this.handleMusicPlay,
        pause: this.handleMusicPause,
        toggle: this.handleMusicToggle,
        stop: this.handleMusicStop,
        isPlaying: () => this.isPlaying,
        isMusicActive: () => this.musicActive
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.musicActive) {
      this.handleMusicStop();
    }
    next();
  },
  mounted() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  setup(){
        const showLoading = ref(true);
        function onCountDownFinished(){
            showLoading.value = false;
        }
        return{
            showLoading,
            onCountDownFinished

        }
    }

}

</script>

<template>
  <div id="app-container">
    <Loading v-if="showLoading" @countdown-finished="onCountDownFinished"/>
    <main v-else class="main">
      <Film/>
      <router-view/>
      <Film/>
    </main>
  
  </div>
</template>

<style scoped>
#app-container{
  width:100%;
  height: 100%;
  overflow: hidden;
}
.main{
  display: flex;
  justify-content: space-between;
}
</style>
