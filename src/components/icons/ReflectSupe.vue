<script>
import reflectores from '@/assets/img/reflectores_superiores.webp';
export default {
    name:'ReflectSupe',
    data(){
        return{
            reflectores
        }
    }
}
</script>
<template>
    <div class="container_reflect">
        <img :src="reflectores" alt="">
    </div>
</template>
<style>
.container_reflect{
    width:100%;
    display: flex;
    justify-content: center;
    position:absolute;
}
.container_reflect img{
    width: 470px;
}

</style>