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
        <div class="container_section_fiesta">
            <CardDressCode/>
            <CardGift/>
            <CardAgenda/>
        </div>
        
    </div>
</template>
<style>
.sectionFiesta_content{
    width:100%;
    display: flex;
    justify-content: center;
    align-items:start;
    height:1400px;
    margin-bottom:1rem;
}
.container_section_fiesta{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
@media (min-width: 768px) and (max-width: 991px) {
    .sectionFiesta_content{
        width:100%;
        height:600px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .container_section_fiesta{
        width:90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }
}
@media (min-width: 1025px) {
    .sectionFiesta_content{
        margin:1rem 0;
        height: 850px;
    }
}
</style>