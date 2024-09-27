<script>
import PopupLocalizacion from '../popups/PopupLocalizacion.vue';
import IconLocation from '../icons/IconLocation.vue';
import BotonBase from '../BotonBase.vue';
export default {
    components: { 
        IconLocation, PopupLocalizacion, BotonBase 
    },
    data() {
        return {
            location: 'La Cascada Eventos',
            mostrarModalLlegar: false,
            popup:false
        }
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        }        
    }
}
</script>

<template>
    <div id="lugar" class ="card_content">
        <div class="card__info">
            <div class="card__info_icon">
                <icon-location class="icon-card"></icon-location>
            </div>
            <div class="card__info__txt">
                <h3 class="card__info__txt__subtitle">{{ location }}</h3>
            </div>
        </div>
        <div class="card__buttom linea-top">
            <popup-localizacion v-show="popup" @close="togglePopUp()"/>
            <div class="card__confirm">
                <BotonBase label="¿CÓMO LLEGAR?" customClass="btn-mayor" class="btn_" @click="togglePopUp"/> 
            </div>        
        </div>
    </div>
</template>

<style scoped>
.card_content{
  display:flex;
  flex-direction: column;
  width:230px;
  align-items: center;
}
.card__info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
  z-index: 100;
  width:100%;
}
.card__info_icon {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__info__txt {
  width: 70%;
}

.card__info__txt {
  font-family: Albra-Medium;
}
.card__confirm{
    display: flex;
    width:220px;
    flex-direction:column;
    align-items: center;
    
  }
  .btn_{
    width:185px;
  }
  .card__info__txt__subtitle {
  margin-top: .5rem;
  font-size: 12px;
  text-align: left;
  font-weight: 500;
  color: var(--color__secundario);
}
.card__buttom {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: .3rem;
  width: 245px;
}
.linea-top {
  border-top: 2px dotted var(--color__secundario);
}
@media(max-width:320px) {
  .card__info_icon {
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .card__info__txt {
    width: 65%;
  }

  .card__info_icon {
    width: 35%;
    display: flex;
    justify-content: center;
  }
  .card_content{
    width:450px;
  }
  .card__buttom{
    width:500px;
  }
}

@media (min-width: 1025px) {
  .card_content{
    width: 600px;
  }
  .card__buttom{
    width:740px;
  }
  .card__confirm{
    width:100%;
  }
  .card__info__txt__subtitle {
    font-size: 1.5rem;
  }

  .icon-card {
    text-align: center;
  }

  .card__info__txt {
    width: 60%;
  }

  .card__info_icon {
    width: 20%;
  }

  .card__info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>