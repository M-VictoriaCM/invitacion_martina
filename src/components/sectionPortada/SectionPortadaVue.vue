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
        <div class="content_sectionPortada">
            <FotoPortada class="foto" />
            <CardInvitacion class="invitacion" />
        </div>
    </div>
</template>
<style>

.container_section {
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content_sectionPortada{
    width: 100%;
    display: flex;
    justify-content: center;
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
    bottom:0;
}

@media (max-width: 360px) {
    .container_section {
        height: 370px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .container_section {
        width: 100%;
        height: 700px;
    }

    .invitacion {
        width: 70%;
        position: absolute;
        bottom:0;
    }
}

@media (min-width: 1025px) {
    .container_section {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content_sectionPortada{
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .foto{
        width:60%;
        height: 95%;
    }
    .invitacion{
        width:50%;
        height:96%;
        right:0;
    }
    

    

}
</style>