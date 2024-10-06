<script>
import CodigoBarra from '../popups/CodigoBarra.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  name: 'CardBase',
  data() {
    return {
      numberCode: '0 30820 092024 15',
      titleCode: "Marti's version",
      subtitleCode: 'XV'
    }
  },
  components: {
    CodigoBarra
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
  <div class="container__card" >
    <div class="container__line">
      <div class="card__image" data-aos="zoom-in">
        <div class="icon__card" >
          <slot name="icon"></slot>
        </div>
      </div>
  
      <div class="card__content" >
        <div class="card__content-text">
          <slot name="content" data-aos="zoom-in"></slot>
        </div>
      </div>
  
      <div class="card__footer" data-aos="zoom-in">
        <div class="card__footer-code">
          <CodigoBarra />
          <p class="number__code" >{{ numberCode }} </p>
          <h1 class="title__code" >{{ titleCode }}</h1>
          <h2 class="title__code" >{{ subtitleCode }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container__card,
.container__line,
.card__content-text,
.card__image,
.card__footer,
.barcode {
  display: flex;
}

.container__card,
.container__line,
.card__content-text,
.card__image {
  justify-content: center;
  align-items: center;
}

.container__card {
  width: 320px;
  height: 420px;
  background: var(--color__secundario);
  box-shadow: var(--color__shadow);
  border-radius: 9px;
  flex-direction: column;
}

.container__line {
  margin: .5rem;
  background: transparent;
  flex-direction: column;
  width: 95%;
  height: 95%;
  border-radius: 9px;
}

.card__content-text {
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.card__image,
.card__content,
.card__footer {
  border: 1px solid var(--color__secundario);
  background: var(--color_txt__light);
}

.card__image {
  border-radius: 9px;
  width: 100%;
  border-radius: 9px;
}

.icon__card {
  width: 90px;
  height: 90px;
  padding: 1rem;
}

.card__content {
  width: 100%;
  height: 50%;
  border-radius: 9px;
}

.card__footer {
  width: 100%;
  height: 32%;
  justify-content: center;
  border-radius: 9px;
}

.card__footer-code {
  width: 80%;
}

.barcode {
  margin-top: .5rem;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}

.code,
.number__code,
.title__code {
  color: var(--color__secundario);
}

.code {
  font-size: 1.3rem;
}

.number__code {
  font-family: Albra-Light;
  font-size: .5rem;
  text-align: center;
}

.title__code {
  font-size: 24px;
  font-family: Northwell;
  line-height: 90%;
  text-align: center;
}

@media(max-width:320px) {
  .container__card {
    width: 260px;
    height: 420px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .container__card {
    width: 260px;
    height: 550px;
  }
}
@media (min-width: 1025px) {
  .container__card {
    width: 900px;
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }

  .container__line {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .card__image {
    height: 100%;
    width: 25%;
  }

  .card__content {
    width: 50%;
    height: 100%;
  }

  .card__footer {
    width: 25%;
    height: 100%;
  }

  .card__footer-code {
    margin-top: 205px;
    transform: rotate(270deg);
    transform-origin: left top;
  }

  .title__code {
    font-size: 36px;
    margin: 1rem 0;
  }

  .barcode {
    height: 100%;
    margin-top: 1rem;
  }

  .icon__card {
    width: 100px;
    height: 100px;
    padding: 1rem;
  }
}
</style>