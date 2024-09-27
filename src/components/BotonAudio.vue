<script>
import { inject } from "vue";
import IconMusicInactive from './icons/IconMusicInactive.vue';
import IconMusicActive from './icons/IconMusicActive.vue';

export default {
    name:'BotonAudio',
    components:{
        IconMusicActive,
        IconMusicInactive
    },
    setup() {
        const audioController = inject('audioController');
        return { audioController };
    },
    methods:{
        toggleMusic() {
            if (this.audioController) {
                this.audioController.toggle();
            }
        }
    }
}
</script>
<template>
    <div>
        <button v-if="audioController.isMusicActive()" 
        class="btn btn__music btn-stick" @click="toggleMusic">
            <template v-if="audioController.isPlaying()">
                <icon-music-active />
            </template>
            <template v-else>
                <icon-music-inactive />
            </template>
        </button> 
    </div>
</template>
<style>
.btn-stick {
  position: fixed;
  bottom: 16%;
  right: 1%;
  z-index: 100;
}

.btn__music{
  background: transparent;
  border: none;
}

.btn__music:focus,
.btn__music:active {
  outline: none;
}

.btn__music:hover {
  border: none;
  background: transparent;
  outline: none;
}

</style>