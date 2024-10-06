<script>
import PopupBase from './PopupBase.vue';
import Swal from 'sweetalert2';
import IconGift from '../icons/IconGift.vue';
import BotonBase from '../BotonBase.vue';
export default {
  name: 'CardBancario',
  components: {
    PopupBase,
    IconGift,
    BotonBase
  },
  data() {
    return {
      title: 'Regalos',
      name: 'Xxxxx Xxxxx ',
      cvu: ' xxxxxxxxxxxxxxxxxxxxxx',
      alias: 'xxxxxx',
      datos: 'xxxxxxxx',
      cuenta: 'xxxxxxxx'
    }
  },
  methods: {
    copyToClipboard(text) {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      Swal.fire({
        title: 'OK!',
        icon: 'success',
        text: '¡El texto ha sido copiado!',
        confirmButtonText: 'OK'
      });
    }

  }
}
</script>

<template>
    <popup-base :title="title">
        <template #icon>
            <div class="circle">
                <icon-gift class="icon__circle" />
            </div>
        </template>
        <div class="modal_content">
            <div class="modal-body">
                <span class="block__text">
                    <h3 class="title__section">TITULAR:</h3>
                    <p class="text__section">{{ name }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section">CVU:</h3>
                    <p class="text__section">{{ cvu }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section">ALIAS:</h3>
                    <p class="text__section">{{ alias }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section">CUIT/CUIL</h3>
                    <p class="text__section">{{ datos }}</p>
                </span>
                <span class="block__text">
                    <h3 class="title__section">CUENTA:</h3>
                    <p class="text__section">{{ cuenta }}</p>
                </span>
            </div>
            <div class="pop-up-footer">
                <BotonBase label="COPIAR CBU" customClass="btn-mayor" class="btn_popup" @click="copyToClipboard(cvu)" />
                <BotonBase label="COPIAR ALIAS" customClass="btn-mayor" class="btn_popup" @click="copyToClipboard(alias)" />
            </div>
        </div>
    
    </popup-base>
</template>

<style scoped>
.circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    z-index: 2;
    margin-top:1rem;
}

.icon__circle {
    width: 40px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items:center;
}

.modal-body {
    margin-top: .5rem;
    width: 100%;
}

.block__text {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title__section {
    font-family: Albra-Medium;
    color: var(--color__secundario);
    font-size: 1rem;
}

.text__section {
    font-family: var(--font__secundaria);
    color: var(--color__secundario);
    font-size: 14px;
    margin-top: .6rem;
    margin-left: .5rem;
    line-height: 100%;
}

.btn-close:hover,
.btn-close:focus {
    outline: none;
    box-shadow: none;
    background-color: var(--color__secundario);
    border-radius: 50%;
}

.btn-close::before {
    color: var(--color__secundario);
}

.pop-up-footer {
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.btn_popup {
    width: 250px;
}

@media(max-width:320px) {
    .pop-up {
        padding: 3px 16px 200px;
    }

    .pop-up-body {
        height: 100%;
    }
}

@media(max-width:360px) {
    .pop-up-inner {
        width: 100%;
        height: 530px;
    }
    
    .circle {
        width: 45px;
        height: 45px;
    }

    .pop-up-body {
        height: 90%;
    }

    .title {
        margin: 0;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .pop-up-inner {
        width: 70%;
    }
    .icon__circle {
        width: 50cm;
        height: 50cm; 
    }
    .circle {
        width: 80px;
        height: 80px;
    }
}

@media (min-width: 1025px) {
    .modal_content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .pop-up-inner {
        width: 100%;
    }
    .icon__circle{
        width:50px;
    }

    .pop-up-body {
        width: 100%;
    }

    .circle {
        width: 150px;
        height: 150px;
    }

    .pop-up-footer {
        width: 100%;
        height:60%;
    }
    .btn_popup {
    width: 100%;
    }

}
</style>