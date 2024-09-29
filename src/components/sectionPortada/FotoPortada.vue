<script>
import foto01 from '@/assets/img/quinceaniera(3).webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    name:'FotoPortada',
    data(){
        return{
            foto01
        }
    },
    mounted() {
    // Inicializar AOS cuando el componente está montado
    AOS.init({
      // Configura las opciones si es necesario
      duration: 1200,
    });
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
.cardSectionPort {
  max-width: 98%;
  height: 220px;
  position: relative;
}

.cardSectionPort img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); 
  border-radius: 9px;
}
@media(max-width:360px) {
    .cardSectionPort{
        width:100%;
        height:150px;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .cardSectionPort{
        width:80%;
        height:450px;
        
    }
    .cardSectionPort img {
        width: 100%;
        height: 400px;
        border-radius: 20px;
    }
}
@media (min-width: 1025px) {
    .cardSectionPort{
        min-width:52%;
        height:300px;
        display: flex;
        align-items: center;
        margin-left: 2%;
    }
    .cardSectionPort img {
        height:405px;
    }

}
</style>
