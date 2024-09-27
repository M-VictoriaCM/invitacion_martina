<script>
import FotoPortada from './FotoPortada.vue';
import CardInvitacion from './CardInvitacion.vue';

export default {
  name: 'SectionPortadaVue',
  components: {
    FotoPortada, CardInvitacion
  },
  
}
</script>
<template>
    <div data-aos="fade-up" class="container_section">
        <FotoPortada class="foto" />
        <CardInvitacion class="invitacion" />
    </div>
</template>
<style>

.container_section {
    width: 100%;
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    z-index: 3;
}

.foto {
    width: 100%;
    height: auto;
    margin-top: 2rem;
    position: relative;
}

.invitacion {
    width: 85%;
    position: absolute;
    margin-top: 70%;
}

@media (max-width: 360px) {
    .container_section {
        height: 370px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .container_section {
        width: 100%;
        height: 750px;
    }

    .invitacion {
        width: 85%;
        position: absolute;
        margin-top: 50%;
    }
}

@media (min-width: 1025px) {
    .container_section {
        min-width: 80%;
        height: 430px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 2rem;
    }

    .foto,
    .invitacion {
        width: 45%;
        margin-top: 0;
    }

}
</style>