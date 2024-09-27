<script>
import ImageSlider from './ImageSlider.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    name:'SectionSlider',
    components:{
        ImageSlider
    }
    ,
    mounted() {
    // Inicializar AOS cuando el componente está montado
        AOS.init({
        });
    }
}
</script>
<template>
    <div class="sectionSlider__content"
    data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <ImageSlider/>
    </div>
</template>
<style>
.sectionSlider__content{
    margin: .5rem 0;
}
@media (min-width: 1025px) {
    .sectionSlider__content{
        margin: 1rem 0;
    }
}
</style>