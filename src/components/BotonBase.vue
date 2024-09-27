<script>
export default {
    name:'BotonBase',
    props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    }
  }
}
</script>
<template>
    <div>
        <button type="button" :class="['btn', customClass, 'btn-lg']">
            {{ label }}
        </button>
    </div>
</template>
<style>
.btn-mayor{
    width: 100%;
    background: var(--color__btn);
    color:var(--color__secundario);
    border: 1px solid var(--line__buttom);
    font-family:Albra-Regular;
    font-size: small;
    padding: 1rem 1rem;
}
.btn-mayor:hover{
    background:var(--color__secundario);
    color: var(--color_txt__light);
}
@media(max-width:360px) {
  .btn-mayor{
    padding: .5rem 1rem;
  }
}
</style>