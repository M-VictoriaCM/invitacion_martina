<script>
import IconAgenda from '../icons/IconAgenda.vue';
import TarjetaBase from './TarjetaBase.vue';
import BotonBase from '../BotonBase.vue';
import 'add-to-calendar-button';
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
            <add-to-calendar-button
                id="css-part-example"
                label="Agendar"
                name="Cumple de Marti"
                options="'Apple','Google'"
                location="La Cascada Eventos"
                startDate="2024-10-24"
                endDate="2024-10-24"
                startTime="10:00"
                endTime="21:00"
            ></add-to-calendar-button>
          </div>
        </template>
      </TarjetaBase>
    </div>
  </template>
  
  <style scoped>
  add-to-calendar-button#css-part-example::part(atcb-button),
  #atcb-btn-css-part-example-modal-host::part(atcb-button){
    width: 160px;
    background: var(--color__btn);
    color:var(--color__secundario);
    border: 1px solid var(--line__buttom);
    font-family:Albra-Regular;
    font-size: small;
    padding: 1rem 1rem;
    margin:0;
}
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
  .card__buttom{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .card__gift{
      margin:0;
    }
    add-to-calendar-button#css-part-example::part(atcb-button),
  #atcb-btn-css-part-example-modal-host::part(atcb-button){
    width:160px;
  }
  }
  </style>