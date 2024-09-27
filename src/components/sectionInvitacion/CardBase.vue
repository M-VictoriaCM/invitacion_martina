<script>
import CardAsistencia from './CardAsistencia.vue';
import CardLocation from './CardLocation.vue';
export default {
  name: 'CardBase',
  data() {
    return {
      title: 'DATOS DE LA FILMACIÓN'
    }
  },
  components: {
    CardAsistencia, CardLocation
  }

}
</script>
<template>
  <div class="section_card-info">
    <div class="notch left-top"></div>
    <div class="notch left-bottom"></div>
    <div class="notch right-top"></div>
    <div class="notch right-bottom"></div>
    <h1 class="card__info__title">{{ title }}</h1>
    <div class="section_card__content">
      <CardAsistencia />
    </div>
    <div class="section_card__content">
      <CardLocation />
    </div>
  </div>
</template>
<style>
.section_card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section_card-info {
  background: var(--color_txt__light);
  width: 280px;
  height: 420px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 0;
}

.section_card-info::before {
  content: "";
  position: absolute;
  border-top: 5px dashed var(--color__principal);
  border-bottom: 5px dashed var(--color__principal);
  height: 10px;
}

.section_card-info::before {
  top: 0;
  left: 0;
  width: calc(100% - 20px);
  height: 100%;
  border-left: none;
  border-right: none;
}

.section_card-info::after {
  top: 0;
  right: 0;
  width: 100%;
  height: calc(100% - 40px);
  border-top: none;
  border-bottom: none;
}

.section_card-info .notch {
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--color__principal);
  border-radius: 50%;
  z-index: 1;
}

.section_card-info .notch.left-top {
  top: -20px;
  left: -20px;
}

.section_card-info .notch.left-bottom {
  bottom: -20px;
  left: -20px;
}

.section_card-info .notch.right-top {
  top: -20px;
  right: -20px;
}

.section_card-info .notch.right-bottom {
  bottom: -20px;
  right: -20px;
}

.card__info__title {
  font-family: Albra-Medium;
  font-size: var(--font-size_24);
  font-weight: 700;
  text-align: center;
  color: var(--color__secundario);
  margin-bottom: .5rem;
  border-radius: 9px;

}

.section_card__content {
  position: relative;
  width: 100%;
  margin-top: .5rem;
  border: 1px solid var(--color__principal);
  padding: .5rem 0 0;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

@media(max-width:320px) {
  .section_card-info {
    width: 240px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .section_card-info {
    width: 540px;
    height: 90%;
  }
  .section_card__content{
    height:135px;
  }
}

@media (min-width: 1025px) {
  .section_card-info .notch {
    width: 60px;
    height: 60px;
    background: var(--color__principal);
  }

  .section_card-info::before {
    top: 0;
    left: 0;
    width: calc(100% - 40px);
    height: 100%;
    border-left: none;
    border-right: none;
  }

  .section_card-info::after {
    top: 0;
    right: 0;
    width: 100%;
    height: calc(100% - 40px);
    border-top: none;
    border-bottom: none;
  }

  .section_card__content {
    width: 740px;
  }

  .section_card-info {
    width: 840px;
    height: 90%;
  }

  .card__info__title {
    font-size: 36px;
  }

}
</style>