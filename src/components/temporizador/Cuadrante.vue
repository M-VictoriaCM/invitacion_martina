<script>
import film from '@/assets/img/film1.webp';
import Timer from './Timer.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  name: 'Cuadrante',
  components: {
    Timer
  },
  data() {
    return {
      film
    }
  },
    mounted() {
    // Inicializar AOS cuando el componente está montado
    AOS.init({
      // Configura las opciones si es necesario
      duration: 1000,
    });
  }
  
}
</script>
<template>
    <div data-aos="fade-right" class="container__cuadrante">
        <img :src="film" class="background_count" alt="film">
        <timer class="timer" />
    </div>
</template>
<style scoped>
.container__cuadrante {
    min-width: 100vw;
    height: 150px;
    position: absolute;
    margin-bottom: 2rem;
}

.background_count {
    width: 100%;
    height: 100%;
    box-shadow: var(--color__shadow);
}

.timer {
    position: absolute;
    top: 24px;
}

@media (min-width: 768px) and (max-width: 991px) {
    .container__cuadrante {
        width: 100%;
        height: 240px;
    }

}

@media (min-width: 1025px) {
    .container__cuadrante {
        width: 100%;
        height: 280px;
    }
}
</style>