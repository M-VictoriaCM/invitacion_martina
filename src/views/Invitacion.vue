<script>
import SectionPortadaVue from '../components/sectionPortada/SectionPortadaVue.vue';
import Cuadrante from '../components/temporizador/Cuadrante.vue';
import SectionInvitacion from '../components/sectionInvitacion/SectionInvitacion.vue';
import SectionSlider from '../components/carrousel/SectionSlider.vue';
import SectionFiesta from '../components/sectionFiesta/SectionFiesta.vue';
import SectionRedes from '../components/SectionRedes.vue';
import SectionFooter from '../components/SectionFooter.vue';
import BotonAudio from '../components/BotonAudio.vue';
export default {
    name: 'Invitacion',
    components: {
        SectionPortadaVue,
        Cuadrante,
        SectionInvitacion,
        SectionSlider,
        SectionFiesta,
        SectionRedes,
        SectionFooter,
        BotonAudio 
    },
    
    methods: {
        scrollTo(hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>
<template>
    <div class="container__invitacion">
        <!--Portada-->
        <SectionPortadaVue class="portada" />
        <!--Timer-->
        <div class="content_cuadrante">
            <Cuadrante />
        </div>
        <SectionInvitacion />
        <SectionSlider />
        <SectionFiesta />
        <div class="redes">
            <SectionRedes class="sectionRedes " />
        </div>
        <BotonAudio/>
        <div class="section__footer">
            <div class="container_section_footer">
                <div class="content__title_footer">
                    <h1 class="title_invitacion">Martina</h1>
                    <h3 class="subtitle_invitacion">MIS 15 AÑOS</h3>
                </div>
                <div class="opciones">
                    <a href="#asistencia" class="opcion" @click.prevent="scrollTo('#asistencia')">CONFIRMAR
                        ASISTENCIA</a>
                    <a href="#lugar" class="opcion" @click.prevent="scrollTo('#lugar')">¿CÓMO LLEGAR?</a>
                    <a href="#gift" class="opcion" @click.prevent="scrollTo('#gift')">DATOS BANCARIOS</a>
                </div>
            </div>
            <SectionFooter />
        </div> 
    </div>
</template>
<style>
.container__invitacion {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
}

.content_cuadrante {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 3rem;
}

.redes {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    height: 400px;
}

.sectionRedes {
    width:100%;
}

.section__footer {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.container_section_footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title_invitacion {
    font-family: Northwell;
    font-size: 78px;
    text-align: center;
    color: var(--color__secundario);
}

.subtitle_invitacion {
    font-family: Albra-medium;
    text-align: center;
    line-height: 30%;
    font-size: var(--font-size_28);
    color: var(--color_txt__light);
}

.content__title_footer {
    width: 100%;
}

.opciones {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.opcion {
    font-size: .75rem;
    text-align: center;
    color: var(--color__secundario);
    text-decoration: none;
}

@media (min-width: 768px) and (max-width: 991px) {
    .content_cuadrante {
        margin-top: 0;
    }
}

@media (min-width: 1025px) {
    .content_cuadrante {
        margin-top: -1rem;
    }

    .section__footer {
        height: 350px;
    }

    .title_invitacion {
        margin-top: 7rem;
        font-size: 96px;
    }

    .section__footer {
        height: 350px;
        display: flex;
        align-items: center;
    }

    .container_section_footer {
        width: 900px;
        height: 100%;
        margin-top: 2.8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
    }
    .content__title_footer{
        margin-bottom:2rem;
    }
    .opciones{
        height:100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom:3rem;
    }
}
</style>