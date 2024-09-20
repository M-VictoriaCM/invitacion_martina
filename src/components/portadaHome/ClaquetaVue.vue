<script>
import claqueta from '@/assets/img/claqueta.webp';
export default {
    name:'ClaquetaVue',
    data(){
        return{
            claqueta,
            subtitle: 'SE APROXIMA LA FILMACIÓN DE',
            title_principal: "Martina's version",
            title: 'XV'
        }
    }
}
</script>
<template>
    <div class="claqueta_container">
        <div class="claqueta_content">
            <img :src="claqueta" class="img__claqueta" alt="claqueta">
        </div>
        <div class="claqueta__text">
            <p class="tex_subtitle">{{ subtitle }}</p>
            <h1 class="txt_title">{{ title_principal }}</h1>
            <h1 class="text_title1">{{ title }}</h1>
        </div>
    </div>
</template>
<style>
.claqueta_container{
    margin-top: 150px;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.claqueta_content{
    width:320px;
    height: 250px;
    position:relative;
}
.img__claqueta{
    object-fit: cover;
    width: 100%;
    height:100%;
}
.claqueta__text{
    position:absolute;
    margin-top:3rem;
    width: 80%;
    height:180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.tex_subtitle,
.txt_title,
.text_title1{
    text-align: center;
    color:var(--color_txt__light);
}

.tex_subtitle{
    font-family: 'Albra-bold';
    font-size: 11px;
    margin: 0 1rem;
    border-bottom:1px solid var(--color_txt__light);
}
.text_title1,
.txt_title{
    font-family: 'Northwell';
}
.txt_title{
    font-size: 42px;
    line-height: 10%;
}
.text_title1{
    font-size: 64px;
    line-height: 80%;
}
@media(max-width:360px) {
    .claqueta_content{
        width: 270px;
        height:230px;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .claqueta_content{
        width: 450px;
        height:350px;
    }
    .claqueta__text{
        width: 360px;
        height:230px;
    }
    .txt_title{
        font-size: 3.5rem;
    }
    .text_title1{
        font-size: 5rem;
    }
}
@media (min-width: 1025px) {
    .claqueta_content{
        width: 500px;
        height:350px;
    }
    .claqueta__text{
        width:400px;
        height:270px;
    }
    .txt_title{
        font-size: 4rem;
    }
    .text_title1{
        font-size: 4.5rem;
    }
    .tex_subtitle{
        font-size: 1rem;
        margin: 1rem 1rem;
    }
}
</style>
