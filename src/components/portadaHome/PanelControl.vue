<script>
import { inject } from 'vue';
import refl_izq from '@/assets/img/reflector_izq.webp';
import refl_der from '@/assets/img/reflector_der.webp';
import ButonBase from '../BotonBase.vue';
export default {
  name: 'PanelControl',
  data() {
    return {
      description: 'La música de fondo es parte de la experiencia.',
      refl_izq, refl_der
    }
  },
  components: {
    ButonBase
  },
  methods: {
    enterWithMusic() {
    //   this.audioController.play();
      this.$router.push({ name: 'Invitacion' });
    },
    enterWithoutMusic() {
    //   this.audioController.stop();
      this.$router.push({ name: 'Invitacion' });
    }
  }
}
</script>
<template>
    <div class="panel_container">
        <img :src="refl_izq" class="refl_izq" alt="reflector">
        <div class="panel_content">
            <p class="panel_subtitle">{{ description }}</p>
            <div class="container_button">
                <ButonBase label="INGRESAR CON MUSICA" customClass="btn-mayor btn_ingreso btn1" @click="enterWithMusic"/>
                <ButonBase label="INGRESAR SIN MUSICA" customClass="btn-mayor btn_ingreso" @click="enterWithMusic"/>
            </div>
        </div>
        <img :src="refl_der" class="refl_der" alt="">
    </div>
</template>
<style>
.panel_container {
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
}

.panel_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.panel_subtitle {
    font-family: Albra-regular;
    font-size: x-small;
    text-align: center;
}

.container_button {
    width: 100%;
}
.refl_izq,
.refl_der{
    width: 70px;
    height: 100%;
}
.btn_ingreso{
    margin-bottom: 0.75rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .panel_container {
        width:400px;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
}

@media (min-width: 1025px) {
    .panel_container {
        width:400px;
        display: flex;
        justify-content: center;
    }
    .container_button{
        width:370px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .panel_subtitle {
        font-size: medium;
    }
    .refl_izq,
    .refl_der{
        width:80px;
    }
}
</style>