<script>
import FotoPortada from './FotoPortada.vue';
export default {
    name:'SectionPortadaVue',
    components:{
        FotoPortada
    }
}
</script>
<template>
    <div class="container_section">
        <FotoPortada/>
    </div>
</template>
<style>
.container_section{
    margin-top:2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>