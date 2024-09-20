<script>
import ReflectSupe from '@/components/icons/ReflectSupe.vue';
import ClaquetaVue from '@/components/portadaHome/ClaquetaVue.vue';
export default {
    name:'SectionPortada',
    components:{
        ClaquetaVue, ReflectSupe
    }
}
</script>
<template>
    <div class="sectionPortada_home">
        <ReflectSupe/>
        <ClaquetaVue/>
        
    </div>
</template>
<style>
.sectionPortada_home{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>