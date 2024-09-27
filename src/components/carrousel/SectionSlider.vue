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
    <div class="sectionSlider__content">
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