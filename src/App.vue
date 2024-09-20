<script>
import { ref } from 'vue';
import Loading from './components/Loading.vue';
import Film from './components/icons/Film.vue';
export default{
  name:'App',
  components:{
    Loading,
    Film
  },
  setup(){
        const showLoading = ref(true);

        function onCountDownFinished(){
            showLoading.value = false;
        }
        return{
            showLoading,
            onCountDownFinished

        }
    }

}

</script>

<template>
  <div id="app-container">
    <Loading v-if="showLoading" @countdown-finished="onCountDownFinished"/>
    <main v-else class="main">
      <Film/>
      <router-view/>
      <Film/>
    </main>
  
  </div>
</template>

<style scoped>
#app-container{
  width:100%;
  height: 100vh;
  overflow: hidden;
}
.main{
  display: flex;
  justify-content: space-between;
}
</style>
