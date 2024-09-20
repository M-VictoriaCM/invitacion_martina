<script>
import SectionPortadaVue from '../components/sectionPortada/SectionPortadaVue.vue';
export default {
    name:'Invitacion',
    components:{
        SectionPortadaVue
    }
}
</script>
<template>
    <div class="container__invitacion">
        <SectionPortadaVue/>
    </div>
</template>
<style>
.container__invitacion{
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border:1px solid salmon;
    position: relative;
    z-index: 2;
}
</style>