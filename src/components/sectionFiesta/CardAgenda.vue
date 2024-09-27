<script>
import IconAgenda from '../icons/IconAgenda.vue';
import TarjetaBase from './TarjetaBase.vue';
import BotonBase from '../BotonBase.vue';
export default {
    name:'CardAgenda',
    components:{
        TarjetaBase,
        IconAgenda,
        BotonBase
    },
    data(){
        return{
            title:'AGENDAR',
            description:'Puedes agendar este evento',
            popup: false
        }
    },
    methods: {
    togglePopUp() {
      this.popup = !this.popup
    }
  }
}
</script>
<template>
    <div id="gift" class="card__gift">
      <TarjetaBase>
        <template #icon>
          <IconAgenda class="icon-card"/>
        </template>
        <template #content>
          <h1 class="card__title">{{ title }}</h1>
          <p class="card__description">{{ description }}</p>
          <div class="card__buttom ">
            <popup-bancario v-show="popup" @close="togglePopUp()" />
            <BotonBase label="Agendar" customClass="btn-mayor" class="btn_popup" @click="togglePopUp()" />
          </div>
        </template>
      </TarjetaBase>
    </div>
  </template>
  
  <style scoped>
  .card__gift{
    margin-top:2rem;
  }
  .card__title {
    margin-top: 1rem;
    font-family: Albra-Bold;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: var(--color__secundario);
  }
  
  .card__description {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: var(--color__secundario);
  }
  
  .icon-card {
    width: 70px;
    height: 70px;
  }
  
  .btn_popup {
    width: 200px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .card__gift{
      margin:0;
    }
  }
  </style>