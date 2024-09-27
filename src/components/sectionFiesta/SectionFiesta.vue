<script>
import CardGift from './CardGift.vue';
import CardDressCode from './CardDressCode.vue';
import CardAgenda from './CardAgenda.vue';
export default {
    name:'SectionFiesta',
    components:{
        CardDressCode,
        CardGift,
        CardAgenda
    }
}
</script>
<template>
    <div id="asistencia" class="sectionFiesta_content">
        <CardDressCode/>
        <CardGift/>
        <CardAgenda/>
    </div>
</template>
<style>
.sectionFiesta_content{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    height:100%;
    margin-bottom:1rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .sectionFiesta_content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:80%;
    }
}
@media (min-width: 1025px) {
    .sectionFiesta_content{
        margin:1rem 0;
    }
}
</style>