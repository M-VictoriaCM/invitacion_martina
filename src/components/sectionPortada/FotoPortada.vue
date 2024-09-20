<script>
import foto01 from '@/assets/img/quinceanera(3).jpg';
export default {
    name:'FotoPortada',
    data(){
        return{
            foto01
        }
    }
}
</script>
<template>
    <div class="cardSectionPort">
        <img :src="foto01" alt="foto">
        <div class="overlay"></div>
    </div>
</template>
<style>
.cardSectionPort{
    width:320px;
    height: 200px;
    display: flex;
    justify-content: center;
    position:relative;
}
.cardSectionPort img{
    width:100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color__overlay);
  border-radius:15px;
  border: 10px solid blur(5px);
}
@media(max-width:360px) {
    .cardSectionPort{
        width:250px;
        height:100%;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .cardSectionPort{
        width:95%;
        height:100%;
    }
}
</style>
