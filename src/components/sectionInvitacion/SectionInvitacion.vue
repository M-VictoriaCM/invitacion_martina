<script>
import CardBase from './CardBase.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    name:'SectionInvitacion',
    components:{
        CardBase
    }
    
}
</script>
<template>
    <div class="marco__section-card"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <CardBase/>
    </div>
</template>
<style>
.marco__section-card {
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: var(--color__principal);
  box-shadow: var(--color__shadow);
  border-radius: 9px;
  height: 450px;
}
@media(max-width:320px){
  .marco__section-card {
    width:260px;
  }
}
/*Extra small*/
@media (min-width: 450px) and (max-width: 567px) {
  .marco__section-card {
    margin-top: 350px;
  }
}
@media (min-width: 567px) and (max-width: 768px) {
  .marco__section-card {
    margin-top:460px;
  }
}
@media (min-width: 768px) and (max-width: 991px){
  .marco__section-card {
    margin-top: 14rem;
    width: 600px;
    height: 400px;
  }
}
@media (min-width: 1025px) {
  .marco__section-card {
    margin-top: 16rem;
    width: 900px;
    height: 500px;
  }
}
</style>