<script>
import IconDress from '../icons/IconDress.vue';
import TarjetaBase from './TarjetaBase.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name:'CardDress',
  components:{
    TarjetaBase,
    IconDress
  },
  data(){
    return{
      title:'DRESS CODE',
      description:'Elegante Sport'
    }
  },
    mounted() {
    // Inicializar AOS cuando el componente está montado
    AOS.init({
      // Configura las opciones si es necesario
      duration: 1000,
    });
  }
}
</script>

<template>
  <div>
    <TarjetaBase>
      <template #icon>
        <icon-dress/>
      </template>
      <template #content>
        <h1 class="card__title">{{ title }}</h1>
        <h2 class="card__description">{{ description }}</h2>
      </template>
    </TarjetaBase>
  </div>
</template>

<style scoped>
.card__title,
.card__description{
  text-align: center;
  color: var(--color__secundario);
}
.card__title{
  font-family: Albra-Bold;
  font-size: 2rem;
  font-weight: 700;
}

.card__description{
  margin-top: 1rem;
  font-size: 16px;
  font-weight: 500;
}

</style>