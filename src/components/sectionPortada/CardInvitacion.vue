<script>
export default {
    name:'CardInvitacion',
    data() {
        return {
            portada: '¡ESTÁS INVITADO!',
            title: "Martina's version",
            subtitle: 'MIS 15 AÑOS',
            text: 'Te espero para compartir la alegría de esa noche que será para mi mágica, inolvidable y única.'
        };
    },
}
</script>
<template>
    <div class="card_container">
        <div class="card_content_body">
            <p class="card_txt">{{ portada }}</p>
            <h1 class="section__title">{{ title }}</h1>
            <h2 class="section__subtitle">{{ subtitle }}</h2>
            <p class="card_text1">{{ text }}</p>
        </div>
        
    </div>
</template>
<style>
.card_container {
  background: var(--color__principal);
  display: flex;
  width:100%;
  height:180px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
}

.card_content_body {
  color: var(--color_txt__light);
  text-align: center;
  width:80%;
  height:90%;
  display: flex;
  flex-direction:column;
}

.card_txt {
  font-family: Albra-Medium;
  border-bottom: 1px solid var(--color_txt__light);
  font-size: small;
  margin-bottom: 0.5rem;
}

.section__title {
  font-family: Northwell;
  font-size: var(--font-size_32);
  margin-bottom: 0.25rem;
}

.section__subtitle {
  font-family: 'Albra-Light';
  font-size: var(--font-size_18);
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--color_txt__light);
}

.card_text1 {
  font-family: 'Albra-Light';
  font-size: small;
}

/* Media Queries */
@media (max-width: 360px) {
  .card_container {
    max-width: 220px;
    height: 150px;
    
  }
  
  .section__title {
    font-size: var(--font-size_24);
  }

  .section__subtitle {
    font-size: var(--font-size_16);
  }

  .card_text1 {
    font-size: xx-small;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .card_container {
    max-width: 100%;
    height: 300px;
    border-radius: 20px;
  }
  .card_content_body{
    width:80%;
  }
  .card_txt{
    font-size: x-large;
    margin-top: none;
  }

  .section__title {
    font-size: 72px;
    margin-top:1.2rem
  }

  .section__subtitle {
    font-size: var(--font-size_32);
  }

  .card_text1 {
    font-size: medium;
  }
}
@media (min-width: 1025px) {
  .card_container {
    width:100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius:30px;
  }
  .card_content_body{
    width:80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
 
  .card_txt{
    font-size: var(--font-size_18);
    margin-top: none;
  }

  .section__title {
    font-size: 72px;
    margin-top:2rem;
  }

  .section__subtitle {
    font-size: 44px;
    margin-top:1rem;
  }

  .card_text1 {
    font-size: var(--font-size_18);
  }

}
</style>