<script>
import ImageSlider from './ImageSlider.vue';

export default {
    name:'SectionSlider',
    components:{
        ImageSlider
    }

}
</script>
<template>
    <div class="sectionSlider__content" data-aos="zoom-out-down">
        <ImageSlider/>
    </div>
</template>
<style>
.sectionSlider__content{
    margin-top:1rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    
}
@media (min-width: 1025px) {
    .sectionSlider__content{
        margin: 1rem 0;
    }
}
</style>