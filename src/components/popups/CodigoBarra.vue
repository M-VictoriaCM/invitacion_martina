<script>
export default {
  name: 'CodigoBarra'
}
</script>
<template>
    <div class="barcode">
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
        <i class="fa-solid fa-barcode code"></i>
    </div>
</template>
<style>
.barcode {
  display: flex;
  margin-top: .5rem;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}
.code {
  font-size: 1.3rem;
  color: var(--color__secundario);
}
@media (min-width: 1025px) {
    .barcode {
    height: 100%;
    margin-top: 1rem;
  }
}
</style>