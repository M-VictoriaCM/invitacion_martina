<script>
import ReflectSupe from '@/components/icons/ReflectSupe.vue';
import ClaquetaVue from '@/components/portadaHome/ClaquetaVue.vue';
import PanelControl from '@/components/portadaHome/PanelControl.vue';
export default {
    name:'Home',
    components:{
        ClaquetaVue, ReflectSupe, PanelControl
    }
    
}
</script>
<template>
    <div class="home_container" id="home">
        <div class="img_reflect"></div>
        <ReflectSupe class="reflect"/>
        <ClaquetaVue/>
        <PanelControl/>
    </div>
</template>
<style>
.home_container{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center ;
    position:relative;
    z-index: 2;
}
.reflect{
    position:absolute;
    z-index: 3;
}
.img_reflect{
    display: none;
}
@media (min-width: 768px) and (max-width: 991px) {
    .home_container{
        width:100vw;
    }
    .reflect{
        display: none;
    }
    .img_reflect{
        display: block;
        background-image: url('../assets/img/reflectores_superiores2.webp');
        background-repeat: repeat-x;
        background-size: contain;
        width: 100vw;
        height: 70%;
        position: absolute;
        z-index: 3;
    }
}

@media (min-width: 1025px) {
    .home_container{
        width:100vw;
    }
    .reflect{
        display: none;
    }
    .img_reflect{
        display: block;
        background-image: url('../assets/img/reflectores_superiores2.webp');
        background-repeat: repeat-x;
        background-size: contain;
        width: 100vw;
        height: 70%;
        position: absolute;
        z-index: 3;
    }
}
</style>